/*************************************************************\
Copyright (C) 2011 Josh Ventura

This file is a part of the ENIGMA Development Environment.

ENIGMA is free software: you can redistribute it and/or 
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation, version 3 of
the license or any later version.

This application and its source code is distributed AS-IS,
WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See
the GNU General Public License for more details.

You should have recieved a copy of the GNU General Public License
along with this code. If not, see <http://www.gnu.org/licenses/>
\*************************************************************/

enigma.global.screen_refresh = function() {
  
}; enigma.global.screen_refresh.argc_min = enigma.global.screen_refresh.argc_max = 0;


  enigma.graphics.setMatrixUniforms = function () {
      gl.uniformMatrix4fv(enigma.graphics.shaderProgram.pMatrixUniform, false, enigma.graphics.pMatrix);
      gl.uniformMatrix4fv(enigma.graphics.shaderProgram.mvMatrixUniform, false, enigma.graphics.mvMatrix);
  }

enigma.global.screen_redraw = function()
{
  var width = enigma.graphics.canvas.clientWidth;
  var height = enigma.graphics.canvas.clientHeight;
  gl.viewport(0, 0, width, height);
  gl.scissor(0, 0, width, height);
  
  gl.clearColor(0.0, 0.4, 1.0, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  mat4.ortho(0, 640, 480, 0, 0, 100.0, enigma.graphics.pMatrix);
  mat4.identity(enigma.graphics.mvMatrix);
  enigma.graphics.setMatrixUniforms();
  
  for (var i in enigma.global.screen_redraw.depths) {
    for (var x in enigma.global.screen_redraw.depths[i]) {
      enigma.global.screen_redraw.depths[i][x]();
    }
  }
}; enigma.global.screen_redraw.argc_min = enigma.global.screen_redraw.argc_max = 0;
enigma.global.screen_redraw.depths = {};

enigma.classes.depth = function(whom,startdepth)
{
	 alert("depth:"+whom.id);
  whom.$depth = startdepth;
  Object.defineProperty(whom,"depth", {
    get: function()  { return this.$depth; },
    set: function(x) {
      delete enigma.global.screen_redraw.depths[this.$depth][this.id];
      this.$depth = x;
      if (!enigma.global.screen_redraw.depths[this.$depth])
        enigma.global.screen_redraw.depths[this.$depth] = {};
      enigma.global.screen_redraw.depths[this.$depth][this.id] = this.myevent_draw.bind(whom);
    }
  });
  if (!enigma.global.screen_redraw.depths[whom.$depth])
    enigma.global.screen_redraw.depths[whom.$depth] = {};
  enigma.global.screen_redraw.depths[whom.$depth][whom.id] = whom.myevent_draw.bind(whom);
}
