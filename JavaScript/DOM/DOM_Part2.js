// Insertion and deletion of an element in html:

// insertion

let h1 = document.createElement("h1");
h1.textContent = "Hello Worlddd!";
h1.classList.add ("b", "c");
// h1.className = "b";
h1.style.backgroundColor = "red";
h1.style.color = "green";
document.body.appendChild(h1);

let x = document.querySelector(".b");
console.log(x);


// deletion 

let ul = document.querySelector("ul");          // first select parent element
console.log(ul);

let y = document.querySelectorAll(".l");        // then select child element 
console.log(y[1]);

// ul.removeChild(y[1]);                           // then delete child from parent

// now if you want to delete all the elements then you can create loop for the same 

for(a of y){
    ul.removeChild(a);              // this will remove all the elements that are in the ul tag and have class = "l"
}