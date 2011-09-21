enigma.global.sprite_exists = function(ind) {
    if (spritestructarray[ind]) return true;
    return false;
};
enigma.global.sprite_get_name = function(ind) {
    return spritestructarray[ind].name;
};
enigma.global.sprite_get_number = function(ind) {
return spritestructarray[ind].subImageCount;
};

enigma.global.sprite_get_transparent = function(ind) {
return spritestructarray[ind].transparent;
};
enigma.global.sprite_get_smooth = function(ind) {
return spritestructarray[ind].smooth;
};

enigma.global.sprite_get_xoffset = function(ind) {
return spritestructarray[ind].originX;
};
enigma.global.sprite_get_yoffset = function(ind) {
return spritestructarray[ind].originY;
};
enigma.global.sprite_get_bbox_left = function(ind) {
return spritestructarray[ind].bbLeft;
};
enigma.global.sprite_get_bbox_right = function(ind) {
return spritestructarray[ind].bbRight;
};
enigma.global.sprite_get_bbox_top = function(ind) {
return spritestructarray[ind].bbTop;
};
enigma.global.sprite_get_bbox_bottom = function(ind) {
return spritestructarray[ind].bbBottom;
};

enigma.global.sprite_get_precise = function(ind) {
return spritestructarray[ind].precise;
};
enigma.global.sprite_get_width = function(ind) {
return spritestructarray[ind].width;
};
enigma.global.sprite_get_height = function(ind) {
return spritestructarray[ind].height;
};
enigma.global.sprite_get_preload = function(ind) {
return spritestructarray[ind].preload;
};