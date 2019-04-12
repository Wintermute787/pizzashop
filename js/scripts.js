function Pizza() {
    this.pizza = [];
    this.total = 0;
}


Pizza.prototype.addItems = function (pizzaItems) {
    this.pizza.push(pizzaItems);
}

Pizza.prototype.addTotal = function(pizza){
    var pizzaItemsArr = Object.values(pizza);
    console.log(pizzaItemsArr);
    
    for(var i = 0; i <= pizzaItemsArr.length; i++){
        if(pizzaItemsArr[i] ==='large'){
            this.total += largePrice;
        }else if(pizzaItemsArr[i] ==='medium'){
            this.total += mediumPrice;
        }else if(pizzaItemsArr[i] ==='small'){
            this.total += smallPrice;
        }else if(pizzaItemsArr[i] === 'pepperoni'){
            this.total += pepporni;
        }else if(pizzaItemsArr[i] ==='sasuage'){
            this.total += sasuage;
        }else if(pizzaItemsArr[i] === "pineapple"){
            this.total += pinapple;
        }
    }
    return this.total;
}

function PizzaItems(size, toppings) {
    this.size = size,
    this.toppings = toppings
    
};

var largePrice = 15.00;
var mediumPrice = 10.00;
var smallPrice = 5.00;

var pepporni = 3.50;
var sasuage = 2.50;
var pinapple = 1.50;


pizza = new Pizza();
$(function() {


    $('#formOne').submit(function (event) {
        event.preventDefault();

    });

    $('#formTwo').submit(function (event) {
        event.preventDefault();
        var total = 0;
        var size = $('input:radio[name=size]:checked').val();
        var toppings = $('input:radio[name=topping]:checked').val();
        var newpizza = new PizzaItems(size, toppings);
        pizza.addItems(newpizza);
        pizza.addTotal(newpizza);
        console.log(newpizza);
        console.log(pizza);
        
        
    })



})