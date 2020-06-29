"use strict";
window.onload = ()=>{

    const animationTextChange = document.querySelector("#animation");
    animationTextChange.onchange = ()=>{
        let optionSelected = animationTextChange.value;
        document.querySelector("#text-area").value = ANIMATIONS[optionSelected];
    }
}