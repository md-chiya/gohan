/*keyCode*/
const key_enter = 13, key_space = 32;

const numer = 6, denom = 10;

var is_reversed_0 = false;
var is_reversed_1 = false;
var is_reversed_2 = false;
var is_reversed_3 = false;

var img_chawan_0 = document.getElementById("img_chawan_0");
var img_chawan_1 = document.getElementById("img_chawan_1");
var img_chawan_2 = document.getElementById("img_chawan_2");
var img_chawan_3 = document.getElementById("img_chawan_3");

var cond = 0;

/*function collection*/
function get_probability() {
    var retval = false;
    if (Math.floor(Math.random() * denom )+ 1 <= numer) {retval = true;}

    return retval;
}

function init_chawan() {
    img_chawan_0.src = "./img/transparent.png"; is_reversed_0 = false;
    if (get_probability()) {img_chawan_1.src = "./img/empty.png"; is_reversed_1 = false;}
    else {img_chawan_1.src = "./img/empty-reverse.png"; is_reversed_1 = true;}
    if (get_probability()) {img_chawan_2.src = "./img/empty.png"; is_reversed_2 = false;}
    else {img_chawan_2.src = "./img/empty-reverse.png"; is_reversed_2 = true;}
    img_chawan_3.src = "./img/transparent.png"; is_reversed_3 = false;
}

function scoop_rice() {
    switch(cond) {
        case 0:
        if (is_reversed_1) {img_chawan_1.src = "./img/full-reverse.png";}
        else {img_chawan_1.src = "./img/full.png";}
        break;
        case 1:
        if (is_reversed_2) {img_chawan_2.src = "./img/full-reverse.png";}
        else {img_chawan_2.src = "./img/full.png";}
        break;
        case 2:
        if (is_reversed_3) {img_chawan_3.src = "./img/full-reverse.png";}
        else {img_chawan_3.src = "./img/full.png";}
        break;
        case 3:
        if (is_reversed_0) {img_chawan_0.src = "./img/full-reverse.png";}
        else {img_chawan_0.src = "./img/full.png";}
        break;
        default: break;
    }
}

function rotate_chawan() {
    switch(cond) {
        case 0:
        img_chawan_0.style = "left:800px; top:-100px;"; img_chawan_0.className = "chawan_sub";
        img_chawan_1.style = "left:-200px; top:-50px;"; img_chawan_1.className = "chawan_sub";
        img_chawan_2.style = "left:0px; top:0px;"; img_chawan_2.className = "chawan";
        img_chawan_3.style = "left:200px; top:-50px;"; img_chawan_3.className = "chawan_sub";
        break;
        case 1:
        img_chawan_0.style = "left:800px; top:-50px;"; img_chawan_0.className = "chawan_sub";
        img_chawan_1.style = "left:600px; top:-100px;"; img_chawan_1.className = "chawan_sub";
        img_chawan_2.style = "left:-400px; top:-50px;"; img_chawan_2.className = "chawan_sub";
        img_chawan_3.style = "left:-200px; top:0px;"; img_chawan_3.className = "chawan";
        break;
        case 2:
        img_chawan_0.style = "left:400px; top:0px;"; img_chawan_0.className = "chawan";
        img_chawan_1.style = "left:600px; top:-50px;"; img_chawan_1.className = "chawan_sub";
        img_chawan_2.style = "left:400px; top:-100px;"; img_chawan_2.className = "chawan_sub";
        img_chawan_3.style = "left:-600px; top:-50px;"; img_chawan_3.className = "chawan_sub";
        break;
        case 3:
        img_chawan_0.style = "left:0px; top:-50px;"; img_chawan_0.className = "chawan_sub";
        img_chawan_1.style = "left:200px; top:0px;"; img_chawan_1.className = "chawan";
        img_chawan_2.style = "left:400px; top:-50px;"; img_chawan_2.className = "chawan_sub";
        img_chawan_3.style = "left:200px; top:-100px;"; img_chawan_3.className = "chawan_sub";
        break;
        default: break;
    }
}

function set_empty_chawan() {
    switch(cond) {
        case 0:
        if (get_probability()) {img_chawan_3.src = "./img/empty.png"; is_reversed_3 = false;}
        else {img_chawan_3.src = "./img/empty-reverse.png"; is_reversed_3 = true;}
        img_chawan_0.src = "./img/transparent.png";
        break;
        case 1:
        if (get_probability()) {img_chawan_0.src = "./img/empty.png"; is_reversed_0 = false;}
        else {img_chawan_0.src = "./img/empty-reverse.png"; is_reversed_0 = true;}
        img_chawan_1.src = "./img/transparent.png";
        break;
        case 2:
        if (get_probability()) {img_chawan_1.src = "./img/empty.png"; is_reversed_1 = false;}
        else {img_chawan_1.src = "./img/empty-reverse.png"; is_reversed_1 = true;}
        img_chawan_2.src = "./img/transparent.png";
        break;
        case 3:
        if (get_probability()) {img_chawan_2.src = "./img/empty.png"; is_reversed_2 = false;}
        else {img_chawan_2.src = "./img/empty-reverse.png"; is_reversed_2 = true;}
        img_chawan_3.src = "./img/transparent.png";
        break;
        default: break;
    }
}

function incrementer() {
    cond++;
    cond = cond % 4;
}

function reverse_chawan() {
    switch(cond) {
        case 0:
        if (is_reversed_1) {img_chawan_1.src = "./img/empty.png"; is_reversed_1 = false;}
        else {img_chawan_1.src = "./img/empty-reverse.png"; is_reversed_1 = true;}
        break;
        case 1:
        if (is_reversed_2) {img_chawan_2.src = "./img/empty.png"; is_reversed_2 = false;}
        else {img_chawan_2.src = "./img/empty-reverse.png"; is_reversed_2 = true;}
        break;
        case 2:
        if (is_reversed_3) {img_chawan_3.src = "./img/empty.png"; is_reversed_3 = false;}
        else {img_chawan_3.src = "./img/empty-reverse.png"; is_reversed_3 = true;}
        break;
        case 3:
        if (is_reversed_0) {img_chawan_0.src = "./img/empty.png"; is_reversed_0 = false;}
        else {img_chawan_0.src = "./img/empty-reverse.png"; is_reversed_0 = true;}
        break;
        default: break;
    }
}

function onPush_enter() {
    scoop_rice();
    rotate_chawan();
    set_empty_chawan();
    incrementer(); 
}

function onPush_space() {
    reverse_chawan();   
}

/*Start from here*/
init_chawan();

function onKeyDown(e) {
    switch (e.keyCode) {
        case key_enter: onPush_enter(); break;
        case key_space: onPush_space(); break;
        default: break;
    }
}
window.addEventListener('keydown', onKeyDown);