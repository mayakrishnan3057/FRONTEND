
let heading = document.getElementById("heading");
let btn = document.getElementById("btn");

heading.style.color = "black";

btn.addEventListener("click", () => {
    heading.style.color = "red";
    heading.style.fontSize = "30px";
});


let box = document.getElementById("box");

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");

box.style.backgroundColor = "white";
box.style.color = "black";

btn1.addEventListener("click", () => {
    box.style.backgroundColor = "blue";
    box.style.color = "white";
});

btn2.addEventListener("click", () => {
    box.style.backgroundColor = "yellow";
    box.style.color = "black";
});