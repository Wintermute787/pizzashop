function Pizza() {
    this.pizza = [];
    this.total = 0;
}


Pizza.prototype.addItems = function (pizzaItems) {
    this.pizza.push(pizzaItems);
}

Pizza.prototype.total = function(price){
    return this.total += price;
}

Pizza.prototype.addPrice = function(pizza){
    
    for(var i = 0; i < pizza.length; i++){
        console.log('you got here');
        if(pizzaitems[i].size ==='large'){
           this.total = total(largePrice);
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
$(function () {


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
        pizza.addPrice(newpizza);
        console.log(pizza);
    })



})