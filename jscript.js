var attns_tt;
var imgedits_tt;
var cur_attn_tt = 0;
var cur_edit_tt = 0;
var image_attn_tt;
var image_edit_tt;

var attns_bb;
var imgedits_bb;
var cur_attn_bb = 0;
var cur_edit_bb = 0;
var image_attn_bb;
var image_edit_bb;

var attns_ch;
var imgedits_ch;
var cur_attn_ch = 0;
var cur_edit_ch = 0;
var image_attn_ch;
var image_edit_ch;

var attns_lge;
var imgedits_lge;
var cur_attn_lge = 0;
var cur_edit_lge = 0;
var image_attn_lge;
var image_edit_lge;

var attns_ms;
var imgedits_ms;
var cur_attn_ms = 0;
var cur_edit_ms = 0;
var image_attn_ms;
var image_edit_ms;


function changeImage(){
    image_attn_tt.src = "./docs/teddybear_timesquare/teddybear_timesquare_" + attns_tt[cur_attn_tt].innerHTML.toLowerCase() + ".png"
    image_edit_tt.src = "./docs/teddybear_timesquare/teddybear_timesquare_" + imgedits_tt[cur_edit_tt].innerHTML.toLowerCase() + ".png"
    image_attn_bb.src = "./docs/banana_basket/banana_basket_" + attns_bb[cur_attn_bb].innerHTML.toLowerCase() + ".png"
    image_edit_bb.src = "./docs/banana_basket/banana_basket_" + imgedits_bb[cur_edit_bb].innerHTML.toLowerCase() + ".png"
    image_attn_lge.src = "./docs/lge_cmr/lge_cmr_" + attns_lge[cur_attn_lge].innerHTML.toLowerCase() + ".png"
    image_edit_lge.src = "./docs/lge_cmr/lge_cmr_" + imgedits_lge[cur_edit_lge].innerHTML.toLowerCase() + ".png"
    image_attn_ms.src = "./docs/ms_cxr/ms_cxr_" + attns_ms[cur_attn_ms].innerHTML.toLowerCase() + ".png"
    image_edit_ms.src = "./docs/ms_cxr/ms_cxr_" + imgedits_ms[cur_edit_ms].innerHTML.toLowerCase() + ".png"
}

function clearStyle_a(elem){
    elem.style.color = '#e55608';
    elem.style.backgroundColor = null;
}

function clearStyle_b(elem){
    elem.style.color = '#2742dc';
    elem.style.backgroundColor = null;
}


function setStyle(elem){
    elem.style.color = '#000000';
    elem.style.backgroundColor = '#f88000';
}

function modifyAttn_tt(i){

    function inner_(){
        if (cur_attn_tt !== i){
            clearStyle_a(attns_tt[cur_attn_tt]);
            cur_attn_tt = i;
            setStyle(attns_tt[cur_attn_tt]);
            changeImage();
        }
    }
    return inner_
}

function modifyImg_tt(i){

    function inner_(){
        if (cur_edit_tt !== i){
            clearStyle_b(imgedits_tt[cur_edit_tt]);
            cur_edit_tt = i;
            setStyle(imgedits_tt[cur_edit_tt]);
            changeImage();
        }
    }
    return inner_
}

function modifyAttn_bb(i){

    function inner_(){
        if (cur_attn_bb !== i){
            clearStyle_a(attns_bb[cur_attn_bb]);
            cur_attn_bb = i;
            setStyle(attns_bb[cur_attn_bb]);
            changeImage();
        }
    }
    return inner_
}

function modifyImg_bb(i){

    function inner_(){
        if (cur_edit_bb !== i){
            clearStyle_b(imgedits_bb[cur_edit_bb]);
            cur_edit_bb = i;
            setStyle(imgedits_bb[cur_edit_bb]);
            changeImage();
        }
    }
    return inner_
}

function modifyAttn_ch(i){

    function inner_(){
        if (cur_attn_ch !== i){
            clearStyle_a(attns_ch[cur_attn_ch]);
            cur_attn_ch = i;
            setStyle(attns_ch[cur_attn_ch]);
            changeImage();
        }
    }
    return inner_
}

function modifyImg_ch(i){

    function inner_(){
        if (cur_edit_ch !== i){
            clearStyle_b(imgedits_ch[cur_edit_ch]);
            cur_edit_ch = i;
            setStyle(imgedits_ch[cur_edit_ch]);
            changeImage();
        }
    }
    return inner_
}

function modifyAttn_lge(i){

    function inner_(){
        if (cur_attn_lge !== i){
            clearStyle_a(attns_lge[cur_attn_lge]);
            cur_attn_lge = i;
            setStyle(attns_lge[cur_attn_lge]);
            changeImage();
        }
    }
    return inner_
}

function modifyImg_lge(i){

    function inner_(){
        if (cur_edit_lge !== i){
            clearStyle_b(imgedits_lge[cur_edit_lge]);
            cur_edit_lge = i;
            setStyle(imgedits_lge[cur_edit_lge]);
            changeImage();
        }
    }
    return inner_
}

function modifyAttn_ms(i){

    function inner_(){
        if (cur_attn_ms !== i){
            clearStyle_a(attns_ms[cur_attn_ms]);
            cur_attn_ms = i;
            setStyle(attns_ms[cur_attn_ms]);
            changeImage();
        }
    }
    return inner_
}

function modifyImg_ms(i){

    function inner_(){
        if (cur_edit_ms !== i){
            clearStyle_b(imgedits_ms[cur_edit_ms]);
            cur_edit_ms = i;
            setStyle(imgedits_ms[cur_edit_ms]);
            changeImage();
        }
    }
    return inner_
}

function set_alpha(slider, fluffy){
    let alpha = 1 - (slider.value - 16) / 52;
    let red = Math.round(248 + 7 * alpha);
    let green = Math.round(128 + 127 * alpha);
    let blue = Math.round(255 * alpha);
    fluffy.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
}

function init() {
    image_attn_tt = document.getElementById("attn-img-tt");
    image_edit_tt = document.getElementById("edit-img-tt");
	attns_tt = document.getElementsByClassName("tt-button_a");
    imgedits_tt = document.getElementsByClassName("tt-button_b");
    setStyle(attns_tt[cur_attn_tt]);
    setStyle(imgedits_tt[cur_edit_tt]);
    for (let i = 0; i < attns_tt.length; ++i){
        attns_tt[i].addEventListener("click", modifyAttn_tt(i));
    }
    for (let i = 0; i < imgedits_tt.length; ++i){
        imgedits_tt[i].addEventListener("click", modifyImg_tt(i));
    }

    image_attn_bb = document.getElementById("attn-img-bb");
    image_edit_bb = document.getElementById("edit-img-bb");
	attns_bb = document.getElementsByClassName("bb-button_a");
    imgedits_bb = document.getElementsByClassName("bb-button_b");
    setStyle(attns_bb[cur_attn_bb]);
    setStyle(imgedits_bb[cur_edit_bb]);
    for (let i = 0; i < attns_bb.length; ++i){
        attns_bb[i].addEventListener("click", modifyAttn_bb(i));
    }
    for (let i = 0; i < imgedits_bb.length; ++i){
        imgedits_bb[i].addEventListener("click", modifyImg_bb(i));
    }


    image_attn_lge = document.getElementById("attn-img-lge");
    image_edit_lge = document.getElementById("edit-img-lge");
	attns_lge = document.getElementsByClassName("lge-button_a");
    imgedits_lge = document.getElementsByClassName("lge-button_b");
    setStyle(attns_lge[cur_attn_lge]);
    setStyle(imgedits_lge[cur_edit_lge]);
    for (let i = 0; i < attns_lge.length; ++i){
        attns_lge[i].addEventListener("click", modifyAttn_lge(i));
    }
    for (let i = 0; i < imgedits_lge.length; ++i){
        imgedits_lge[i].addEventListener("click", modifyImg_lge(i));
    }

    image_attn_ms = document.getElementById("attn-img-ms");
    image_edit_ms = document.getElementById("edit-img-ms");
	attns_ms = document.getElementsByClassName("ms-button_a");
    imgedits_ms = document.getElementsByClassName("ms-button_b");
    setStyle(attns_ms[cur_attn_ms]);
    setStyle(imgedits_ms[cur_edit_ms]);
    for (let i = 0; i < attns_ms.length; ++i){
        attns_ms[i].addEventListener("click", modifyAttn_ms(i));
    }
    for (let i = 0; i < imgedits_ms.length; ++i){
        imgedits_ms[i].addEventListener("click", modifyImg_ms(i));
    }


    let slider = document.getElementById("range_bunny");
    let image_bunny = document.getElementById("bunny-img");
    let fluffy  = document.getElementById("fluffy");
    set_alpha(slider, fluffy)
    slider.oninput = function() {
        // 248, 128, 0
     image_bunny.src = "./docs/teddybear_timesquare/teddybear_timesquare_" + String(slider.value).padStart(2, '0') + ".png";
     set_alpha(slider, fluffy)

    }


}
document.addEventListener("DOMContentLoaded", () => {
  init();
});