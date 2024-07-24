//click
let click = document.querySelector(".click");
click.addEventListener("click", function(){alert("You just click on onclick box.")});

//dblclick
let dblclick = document.querySelector(".dblclick");
dblclick.addEventListener("dblclick", function(){alert("You double click on Doubleclick box.")});

// Mouseover
let cursor1 = document.querySelector(".restrict");
cursor1.addEventListener("mouseover", function(){
    alert("You enter in restricted area.");
});

// Mouse out
let cursor = document.querySelector(".safe");
cursor.addEventListener("mouseout", function(){
    alert("You left the safe zone.");
});

//keypress

let inputBox = document.getElementById('input-box') ;
let display1 = document.getElementById('keyPress');

// // adding a keypress event listener to the inputbox
inputBox.addEventListener('keypress', function(e){
    display1.innerText ="you have Pressed " + e.key;
})

// keydown and keyup event
let display = document.getElementById("key");

// adding a keydown event listener to the document
document.addEventListener("keydown", function (e) {
  display.style.color = "red";
  display.innerText = e.key + " is keyDown";
});

// adding a keyup event listener to the document
document.addEventListener("keyup", function (e) {
  display.style.color = "green";
  display.innerText = e.key + " is keyUp";
});