// how to catch elements through javascript

// This technique is known as DOM:Document Object Model

let h = document.getElementsByClassName("a");      //  it will catch all element h1 so you need to tell which element
let h1 = h[0];
console.log(h1);        // It will print first whole element

// now I want only content of h1
let innerText1 = h1.innerText;
console.log(innerText1);

// lets manipulate the data with the help of javascript
innerText1 = "Bye Bye";
console.log(innerText1);

// let catch via id
let id = document.getElementById("id");
let innerText = id.innerText;
console.log(innerText);

// let catch via tag name
let ele = document.getElementsByTagName("div");
console.log(ele[0]);

// another method to catch that is queryselector
let q = document.querySelector(".a");
console.log(q);

let q1 = document.querySelectorAll(".l")
console.log(q1);

let q2 = document.querySelector("div");
console.log(q2);

let q3 = document.querySelector("#id");
console.log(q3);

// you can update class name, classList, id, style, and set attributes
q.className = "hell";
console.log(q);

q1[0].classList = "x, y, z";
console.log(q1[0]);

q2.id = "hattt";
console.log(q2);

q3.setAttribute ("title", "Kya haal hai?");
console.log(q3);