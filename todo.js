
let button = document.querySelector("button");

let liste = document.querySelector("ul");

let input = document.querySelector("input");

let check = document.querySelector("#check");

let button2 = document.querySelector("#butt");

button.addEventListener("click", addTodo);
button2.addEventListener("click", alert('deleted'));
function line() {
if (liste.innerHTML.getElementById("check".checked = "true")) {
liste.innerHTML.getElementById("text").style.textDecorationLine = "line-through";
}
}
function addTodo() {
if (input.value == "") {
alert("Please Try again !! ");
}
else {

liste.innerHTML += <li> <input onclick="line()" id="check" type="checkbox" /> <span id="text"> ${input.value} </span>
    <button id="butt"> Delete</button> </li>;
input.value = "";
}
}