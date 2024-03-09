console.log("Hello World");
var greenbutton = document.getElementById("green");
console.log(greenbutton);

greenbutton.addEventListener('click', callAlert);
greenbutton.addEventListener('mouseout', orange);

function callAlert() {
    alert("PICK UP");
    greenbutton.innerHTML = "I got clicked!";

}
function orange() {
    greenbutton.innerHTML = "green button";

}