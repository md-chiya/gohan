/*keyCode*/
const key_enter = 13, key_space = 32;

const numer = 4, denom = 10;
const numofq = 10;

var is_reversed_0 = false, is_scooped_0 = false;
var is_reversed_1 = false, is_scooped_1 = false;
var is_reversed_2 = false, is_scooped_2 = false;
var is_reversed_3 = false, is_scooped_3 = false;

var img_chawan_0 = document.getElementById("img_chawan_0");
var img_chawan_1 = document.getElementById("img_chawan_1");
var img_chawan_2 = document.getElementById("img_chawan_2");
var img_chawan_3 = document.getElementById("img_chawan_3");

var cond = 0, i = 0;
var str = "";
var no = 0, ok = 0, ng = 0;
var start, end, flag_end = 0;;

/*function collection*/
function get_probability() {
    var retval = false;
    if (Math.floor(Math.random() * denom )+ 1 <= numer) {retval = true;}

    return retval;
}

function init_chawan() {
    img_chawan_0.src = "./img/transparent.png"; is_reversed_0 = false; is_scooped_0 = true;
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
        is_scooped_1 = true;
        break;

        case 1:
        if (is_reversed_2) {img_chawan_2.src = "./img/full-reverse.png";}
        else {img_chawan_2.src = "./img/full.png";}
        is_scooped_2 = true;
        break;

        case 2:
        if (is_reversed_3) {img_chawan_3.src = "./img/full-reverse.png";}
        else {img_chawan_3.src = "./img/full.png";}
        is_scooped_3 = true;
        break;

        case 3:
        if (is_reversed_0) {img_chawan_0.src = "./img/full-reverse.png";}
        else {img_chawan_0.src = "./img/full.png";}
        is_scooped_0 = true;
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

function check_ans() {
    switch(cond) {
        case 0:
        if(is_reversed_1 == false) {ok++;}
        else {ng++;}
        break;

        case 1:
        if(is_reversed_2 == false) {ok++;}
        else {ng++;}
        break;

        case 2:
        if(is_reversed_3 == false) {ok++;}
        else {ng++;}
        break;

        case 3:
        if(is_reversed_0 == false) {ok++;}
        else {ng++;}
        break;

        default: break;
    }
}

function set_empty_chawan() {
    switch(cond) {
        case 0:
        if (get_probability()) {img_chawan_3.src = "./img/empty.png"; is_reversed_3 = false;}
        else {img_chawan_3.src = "./img/empty-reverse.png"; is_reversed_3 = true;}
        is_scooped_3 = false;
        img_chawan_0.src = "./img/transparent.png";
        break;

        case 1:
        if (get_probability()) {img_chawan_0.src = "./img/empty.png"; is_reversed_0 = false;}
        else {img_chawan_0.src = "./img/empty-reverse.png"; is_reversed_0 = true;}
        is_scooped_0 = false;
        img_chawan_1.src = "./img/transparent.png";
        break;

        case 2:
        if (get_probability()) {img_chawan_1.src = "./img/empty.png"; is_reversed_1 = false;}
        else {img_chawan_1.src = "./img/empty-reverse.png"; is_reversed_1 = true;}
        is_scooped_1 = false;
        img_chawan_2.src = "./img/transparent.png";
        break;

        case 3:
        if (get_probability()) {img_chawan_2.src = "./img/empty.png"; is_reversed_2 = false;}
        else {img_chawan_2.src = "./img/empty-reverse.png"; is_reversed_2 = true;}
        is_scooped_2 = false;
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

function calc_raito() {
    return ok / no;
}

function calc_time_ms() {
    return (end - start) / 1000;
}

function calc_score() {
    var accuracy = calc_raito() * 80;
    var agility, time = calc_time_ms();
    var score;
    var comment = "";

    if (time <= 3 && calc_raito() >= 0.6) {agility = 40;}
    else if (time <= 7) {agility = 20;}
    else if (time <= 10) {agility = 10;}
    else if (time <= 15) {agility = 5;}
    else {agility = 0;}

    score = Math.floor(accuracy + agility);

    if (score >= 100) {comment = "（すばらしい）";}
    else if (score >= 90) {comment = "（すごい）";}
    else if (score >= 80) {comment = "（いいね）";}
    else if (score >= 70) {comment = "（まあまあ）";}

    return Math.floor(accuracy + agility) + comment;
}

function onPush_enter() {
    if (ok >= numofq) {
        if (flag_end == 0) {end = new Date();} 
        alert(no + "杯終了\n正答率：" + (calc_raito().toFixed(3) * 100) + "\%（正解：" + ok + "　不正解：" + ng + "）" + "\nタイム　：" + calc_time_ms().toFixed(3) + "秒\nスコア　：" + calc_score() + str);
        flag_end = 1;
        str = "\n\nもう一度タイムアタックをしたい？左の「はじめから」を押してね\n好きなだけよそうなら「エンドレス」だよ";
        return;
    } else {no++;}

    scoop_rice();
    rotate_chawan();
    check_ans();
    set_empty_chawan();
    incrementer();
}

function onPush_space() {
    reverse_chawan();   
}

/*Start from here*/
do {
    if (i <= 4) {
        switch(i) {
            case 0: str = "タイムアタック（10杯）の準備はいい？\nOKを押したら始まるよ"; break;
            case 1: str = "はじめますよ？"; break;
            case 2: str = "どうしてOKを押さないのですか？"; break;
            case 3: str = "このままでいいのか、いけないのか、それが問題だ\n─────ウィリアム・シェイクスピア"; break;
            case 4: str = "そろそろよろしいでしょうか"; break;
            default: break;
        }
        i++;
    } else {
        alert("始めますね");
        break;
    }
}while(window.confirm(str) == false);

str = "";
init_chawan();

start = new Date();

function onKeyDown(e) {
    switch (e.keyCode) {
        case key_enter: onPush_enter(); break;
        case key_space: onPush_space(); break;
        default: break;
    }
}
window.addEventListener('keydown', onKeyDown);