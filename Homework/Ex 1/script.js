function updateCart () {
    // gets all the quantities of all products
    let quantityOf1 = document.getElementById('product-1').value;
    let quantityOf2 = document.getElementById('product-2').value;
    let quantityOf3 = document.getElementById('product-3').value;
    let quantityOf4 = document.getElementById('product-4').value;
    let quantityOf5 = document.getElementById('product-5').value;
    let quantityOf6 = document.getElementById('product-6').value;

    console.log(quantityOf1);

    // calculates the total cost of each products
    let priceOfQuantity1 = document.getElementById('item-price-1').innerHTML;
    let priceOfQuantity2 = document.getElementById('item-price-2').innerHTML;
    let priceOfQuantity3 = document.getElementById('item-price-3').innerHTML;
    let priceOfQuantity4 = document.getElementById('item-price-4').innerHTML;
    let priceOfQuantity5 = document.getElementById('item-price-5').innerHTML;
    let priceOfQuantity6 = document.getElementById('item-price-6').innerHTML;


    console.log(priceOfQuantity1)

    // displays each item's description times the number of items 
}