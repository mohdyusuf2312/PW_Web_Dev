// EventListner :

function open(){
    let a = document.createElement("p");
    a.textContent = "Helllllooooooooo Worlddddd!!";
    a.style.color = "#808080";
    a.style.fontSize = "22px";
    a.style.border = "5px solid red";
    document.body.appendChild(a);

    let b = document.createElement("button");
    b.setAttribute("class", "button");
    // b.setAttribute("onclick", "hey()");             // wrong way
    b.onclick = hey;                                 // right way
    b.textContent = "Submit";
    b.style.padding = "5px 10px";
    b.style.color = "white";
    b.style.backgroundColor = "black";
    document.body.appendChild(b);
    console.log(b);
}

function hey(){
    let i = document.querySelectorAll(".l");
    for(a of i){
        a.style.color = "red";
    }
    let j = document.querySelector("button");
    j.style.color = "black";
    j.style.backgroundColor = "white";
    j.style.border = "3px solid black";
}

document.addEventListener("dblclick",open);    // first attribute is Object that is inbuit event like click, dbclick, mouseenter,etc
// document.addEventListener("dblclick", hey);
