var sandwich = {
    bread:    "sourdough",
    protein:  "london broil",
    cheese:   "lacey swiss cheese",
    toppings: ["romaine lettuce", "heirloom tomatoes", "horseradish sauce"]
};
console.log(sandwich);

function sandwichFactory(bread, protein, cheese, toppings) {
    var sandwich = {};
    sandwich.bread = bread;
    sandwich.protein = protein;
    sandwich.cheese = cheese;
    sandwich.toppings = toppings;
    return sandwich;
}
    
var s1 = sandwichFactory("wheat", "turkey", "provolone", ["mustard", "fried onions", "arugula"]);
console.log(s1);

console.log(Math.random * 4)

function pizzaOven(crustType, sauceType, cheeses, toppings){
    var crustType = ["deep dish", "hand tossed", "stuffed crust", "thin crust"]
    crustType = crustType[Math.floor(crustType.length * Math.random())];
    var sauceType = ["traditional", "marinara", "Pesto", "Garlic Ranch Sauce"]
    sauceType = sauceType[Math.floor(sauceType.length * Math.random())];
    var cheeses = ["Gorgonzola","mozzarella","feta","Parmigiano"]
    cheeses = cheeses[Math.floor(cheeses.length * Math.random())];
    var toppings = ["pepperoni, sausage","mushrooms, olives, onions","pinapples,ham","bacon"]
    toppings = toppings[Math.floor(toppings.length * Math.random())];
    var pizza = {}
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
var rp1 = pizzaOven()
console.log(rp1)

var p1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"])
console.log(p1)
var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"])
console.log(p2)
var p3 = pizzaOven("stuffed", "scpicy", ["mozzarella", "feta"], ["mushrooms","bacon"])
console.log(p3)
var p4 = pizzaOven("hand tossed", "marinara", "mozzarella", ["pinapples","ham"])
console.log(p4)
