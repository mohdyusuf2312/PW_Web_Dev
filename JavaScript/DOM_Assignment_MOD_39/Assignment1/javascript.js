let display = document.querySelector("#count");
let dis_num = display.innerText;

// Increment
function increment(){
    display.innerText = ++dis_num;
}

// Decrement
function decrement(){
    display.innerText = --dis_num;
}

// reset 
function reset(){
    display.innerText = dis_num = 0;
}


let btn = document.querySelector(".reset");
btn.addEventListener("click", reset);

let btn_inc = document.querySelector(".inc");
btn_inc.addEventListener("click", increment);

let btn_dec = document.querySelector(".dec");
btn_dec.addEventListener("click", decrement);