let heading = document.getElementById("title");

heading.innerText = "Welcome to JavaScript";

heading.style.color = "blue";

heading.style.fontSize = "30px";


let paragraphs = document.getElementsByClassName("para");

paragraphs[0].style.color = "red";

paragraphs[1].style.backgroundColor = "yellow";

paragraphs[2].style.fontSize = "25px";


let username = document.getElementById("username");

username.value = "Arun";

let email = document.querySelector(".email");

email.value = "arun@gmail.com";

username.style.backgroundColor = "lightblue";

let submitBtn = document.getElementById("submitBtn");

submitBtn.disabled = true;