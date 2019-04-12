function Pizza(){
    this.pizza = '';
    this.toppings = '';
    this.total = 0;
}

function PizzaItems(size, toppings){
    this.size = size,
    this.toppings = toppings
};

var largePrice = 15.00;
var mediumPrice = 10.00;
var smallPrice = 5.00;

var pepporni = 3.50;
var sasuage = 2.50;
var pinapple = 1.50;



$(function(){
    $('#formOne').submit(function(event){
        event.preventDefault();

    });

    $('#formTwo').submit(function(event){
        event.preventDefault();

        var size = $('input:radio[name=size]:checked').val();
        var toppings = $('input:radio[name=topping]:checked').val();
    })
})