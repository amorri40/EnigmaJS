/*******************************************************************************
 * ***********************************************************\ Copyright (C)
 * 2011 Josh Ventura
 * 
 * This file is a part of the ENIGMA Development Environment.
 * 
 * ENIGMA is free software: you can redistribute it and/or modify it under the
 * terms of the GNU General Public License as published by the Free Software
 * Foundation, version 3 of the license or any later version.
 * 
 * This application and its source code is distributed AS-IS, WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE. See the GNU General Public License for more details.
 * 
 * You should have recieved a copy of the GNU General Public License along with
 * this code. If not, see <http://www.gnu.org/licenses/> \
 ******************************************************************************/

enigma.objects.object_locals = function(id, oid, x, y) {
	this.prototype = new enigma.system.object_basic(id, oid);
	enigma.classes.object_planar(this, x, y);
	
	// This is the universal create event code
	this.xstart = this.x;
    this.ystart = this.y;
    this.xprevious = this.x;
    this.yprevious = this.y;

    this.gravity=0;
    this.gravity_direction=270;
    this.friction=0;
    
    this.image_alpha = 1.0;
    this.image_angle = 0;
    this.image_blend = 0xFFFFFF;
    this.image_index = 0;
    this.image_single = -1;
    this.image_speed  = 1;
    this.image_xscale = 1;
    this.image_yscale = 1;
};

enigma.system.onmousemove = function(e) {
	var x;
	var y;
	if (!e)
		e = window.event;
	if (e.pageX || e.pageY) {
		x = e.pageX;
		y = e.pageY;
	} else {
		x = e.clientX + document.body.scrollLeft
				+ document.documentElement.scrollLeft;
		y = e.clientY + document.body.scrollTop
				+ document.documentElement.scrollTop;
	}
	// Convert to coordinates relative to the canvas
	x -= enigma.graphics.canvas.offsetLeft;
	y -= enigma.graphics.canvas.offsetTop;
	enigma.global.mouse_x = x;
	enigma.global.mouse_y = y;
}

enigma.global.mouse_x = 0;
enigma.global.mouse_y = 0;
enigma.objects.OBJ_obj_myplane = function(id, oid, x, y) {
	this.prototype = new enigma.objects.object_locals(id, oid, x, y);
	this.x=x;
	this.y=y;
	/*this.myevent_draw = function() {
		with (this) {
			enigma.global.draw_clear(0xFFFF00);
			dir += .05;
			if (enigma.global.mouse_x <= 0 || enigma.global.mouse_y <= 0
					|| enigma.global.mouse_x > 640
					|| enigma.global.mouse_y > 480)
				enigma.global.draw_diamond(32 + 32 * enigma.global.cos(dir),
						32 + 32 * enigma.global.sin(dir),
						640 - 32 - 32 * enigma.global.cos(dir),
						480 - 32 - 32 * enigma.global.sin(dir), 0);
			else
				enigma.global.draw_diamond(32 + 32 * enigma.global.cos(dir),
						32 + 32 * enigma.global.sin(dir),
						enigma.global.mouse_x, enigma.global.mouse_y, 0);
		}
		
	};*/
	
	this.myevent_draw=function() {
	
		//default draw event
	if (this.image_single!=-1) { this.image_speed = 0; this.image_index = this.image_single; } 
	if (this.visible && this.sprite_index != -1) enigma.global.draw_sprite_ext(this.sprite_index,this.image_index,
        this.x,this.y,this.image_xscale,this.image_yscale,this.image_angle,this.image_blend,this.image_alpha);
	};

	// Grouped event bases
	this.myevent_alarm = function() {
		myevent_alarm_0();
	};
	this.myevent_keyboard = function() {
		if (enigma.global.keyboard_check(40))
			myevent_keyboard_40();
		if (keyboard_check(39))
			myevent_keyboard_39();
		if (keyboard_check(38))
			myevent_keyboard_38();
		if (keyboard_check(37))
			myevent_keyboard_37();
		if (keyboard_check(32))
			myevent_keyboard_32();
	};
	this.unlink = function() {
		// unlink events and destroy
	};

	this.myevent_create = function() {
		can_shoot = 1;
		return 0;
	};

	this.myevent_alarm_0 = function() {
		{
			if ((alarm[0] == -1) || (alarm[0]--))
				return 0;
		}
		can_shoot = 1;
		return 0;
	};

	this.myevent_step = function() {
		{
			//alert("Step event");
			enigma.global.fps=0;
			enigma.global.room_caption = enigma.global.fps;
			
		}
		;
		return 0;
	};
	
	this.myevent_keyboard_40=function()
	{
	  if(enigma.global.action_if_variable(y, room_height - 120, 1))
	  {
		  enigma.global.argument_relative = 1;
		  enigma.global.action_move_to(0, 2);
	    
	  }
	  ;
	  
	  return 0;
	};

	/*
	 * constructor
	 */
	this.sprite_index = 0;
	this.visible = 1;
	this.solid = 0;
	enigma.classes.depth(this, 0);
	this.dir = 0;
	// link events
	enigma.system.event_loop.link_event(id,3,0,this.myevent_step);
	this.myevent_create();
}

//var instance = new enigma.objects.OBJ_obj_myplane(10007,0,0,0);

