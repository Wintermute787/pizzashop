function Pizza() {
    this.pizza = [];
    this.total = 0;
}


Pizza.prototype.addItems = function (pizzaItems) {
    this.pizza.push(pizzaItems);
}

Pizza.prototype.addPrice = function(pizza){
    for(var i =0; i < pizza.length; i++){
        if(this.pizza[0] ==='large'){
             this.total += largePrice;
        }else if(this.pizza[0] ==='medium'){
             this.total += mediumPrice;
        }else if(this.pizza[0] ==='small'){
            this.total += smallPrice;
        }else if(this.pizza[1] === 'pepperoni'){
            this.total += pepporni;
        }else if(this.pizza[1] === 'sasuage'){
            this.total += sasuage;
        }else if(this.pizza[1] === 'pineapple'){
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
$(function () {


    $('#formOne').submit(function (event) {
        event.preventDefault();

    });

    $('#formTwo').submit(function (event) {
        event.preventDefault();

        var size = $('input:radio[name=size]:checked').val();
        var toppings = $('input:radio[name=topping]:checked').val();
        var newpizza = new PizzaItems(size, toppings);
        pizza.addItems(newpizza);
        pizza.addPrice(pizza);
        console.log(pizza)
    })



})