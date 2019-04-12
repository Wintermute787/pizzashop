function Pizza() {
    this.pizza = [];
    
}


Pizza.prototype.addItems = function (pizzaItems) {
    this.pizza.push(pizzaItems);
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
        console.log(newpizza);
        
        if(size ==='large'){
         total += largePrice;
        }else if(size ==='medium'){
            total += mediumPrice;
        }else if(size ==='small'){
            total += smallPrice;
        }else if(toppings === 'pepperoni'){
            total += pepporni;
        }else if(toppings ==='sasuage'){
            total += sasuage;
        }else if(toppings ==='pineapple'){
            total += pinapple;
        }
        console.log(total);
        
        
    })



})