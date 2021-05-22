
var clicks = 0;
var counter1 = document.getElementById("clickMe")
console.log(counter)
function counter() {
    clicks += 1;
    console.log(clicks)
    counter1.innerHTML = "Click me to count: " + clicks;
};
function refresh(){
    clicks = 0
    console.log(clicks)
    counter1.innerHTML = "Click me to print: " + clicks;
}