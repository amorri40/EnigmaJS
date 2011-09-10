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

enigma.system.object_basic.execute_string = 
enigma.global.execute_string = function(str) {
  var esr = enigma.parser.parse_edl(str);
  if (esr != -1)
    throw "Error at position " + esr + ": " + enigma.parser.err;
  return eval("(function(){" + enigma.parser.code_out + "})();");
}
