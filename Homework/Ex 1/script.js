function addToCart1() {
  let quantityOf1 = document.getElementById("product-1").value;
  let priceOfItem1 = document.getElementById("item-price-1").innerHTML;
  let priceOfQuantity1 = quantityOf1 * priceOfItem1;
  if (quantityOf1 > 0) {

    let row1 = document.createElement("div");
    row1.id = "item-1";
    document.getElementById("cart-items").appendChild(row1);

    let descriptionOfItem1 = document.getElementById("item-1-description").innerHTML;
    let descriptionElement = document.createElement("p");
    descriptionElement.id = "item-description";
    descriptionElement.innerHTML = descriptionOfItem1;
    document.getElementById("item-1").appendChild(descriptionElement);
    
    let quantityElement = document.createElement("p");
    quantityElement.id = "item-description";
    quantityElement.innerHTML = quantityOf1 + " x  $ " + priceOfItem1 + " =  $ " + priceOfQuantity1;
    document.getElementById("item-1").appendChild(quantityElement);
  }
}

function addToCart2() {
  let quantityOf2 = document.getElementById("product-2").value;
  let priceOfItem2 = document.getElementById("item-price-2").innerHTML;
  let priceOfQuantity2 = quantityOf2 * priceOfItem2;

  if (quantityOf2 > 0) {
    let row2 = document.createElement("div");
    row2.id = "item-2";
    document.getElementById("cart-items").appendChild(row2);

    let descriptionOfItem2 = document.getElementById("item-2-description").innerHTML;
    let descriptionElement = document.createElement("p");
    descriptionElement.id = "item-description";
    descriptionElement.innerHTML = descriptionOfItem2;
    document.getElementById("item-2").appendChild(descriptionElement);
    
    let quantityElement = document.createElement("p");
    quantityElement.id = "item-description";
    quantityElement.innerHTML = quantityOf2 + " x  $ " + priceOfItem2 + " =  $ " + priceOfQuantity2;
    document.getElementById("item-2").appendChild(quantityElement);
  }
}
function addToCart3() {
  let quantityOf3 = document.getElementById("product-3").value;
  let priceOfItem3 = document.getElementById("item-price-3").innerHTML;
  let priceOfQuantity3 = quantityOf3 * priceOfItem3;

  if (quantityOf3 > 0) {
    let row3 = document.createElement("div");
    row3.id = "item-3";
    document.getElementById("cart-items").appendChild(row3);

    let descriptionOfItem3 = document.getElementById("item-3-description").innerHTML;
    let descriptionElement = document.createElement("p");
    descriptionElement.id = "item-description";
    descriptionElement.innerHTML = descriptionOfItem3;
    document.getElementById("item-3").appendChild(descriptionElement);
    
    let quantityElement = document.createElement("p");
    quantityElement.id = "item-description";
    quantityElement.innerHTML = quantityOf3 + " x  $ " + priceOfItem3 + " =  $ " + priceOfQuantity3;
    document.getElementById("item-3").appendChild(quantityElement);
  }
}
function addToCart4() {
  let quantityOf4 = document.getElementById("product-4").value;
  let priceOfItem4 = document.getElementById("item-price-4").innerHTML;
  let priceOfQuantity4 = quantityOf4 * priceOfItem4;

  if (quantityOf4 > 0) {
    let row4 = document.createElement("div");
    row4.id = "item-4";
    document.getElementById("cart-items").appendChild(row4);

    let descriptionOfItem4 = document.getElementById("item-4-description").innerHTML;
    let descriptionElement = document.createElement("p");
    descriptionElement.id = "item-description";
    descriptionElement.innerHTML = descriptionOfItem4;
    document.getElementById("item-4").appendChild(descriptionElement);
    
    let quantityElement = document.createElement("p");
    quantityElement.id = "item-description";
    quantityElement.innerHTML = quantityOf4 + " x  $ " + priceOfItem4 + " =  $ " + priceOfQuantity4;
    document.getElementById("item-4").appendChild(quantityElement);
  }
}
function addToCart5() {
  let quantityOf5 = document.getElementById("product-5").value;
  let priceOfItem5 = document.getElementById("item-price-5").innerHTML;
  let priceOfQuantity5 = quantityOf5 * priceOfItem5;

  if (quantityOf5 > 0) {
    let row5 = document.createElement("div");
    row5.id = "item-5";
    document.getElementById("cart-items").appendChild(row5);

    let descriptionOfItem5 = document.getElementById("item-5-description").innerHTML;
    let descriptionElement = document.createElement("p");
    descriptionElement.id = "item-description";
    descriptionElement.innerHTML = descriptionOfItem5;
    document.getElementById("item-5").appendChild(descriptionElement);
    
    let quantityElement = document.createElement("p");
    quantityElement.id = "item-description";
    quantityElement.innerHTML = quantityOf5 + " x  $ " + priceOfItem5 + " =  $ " + priceOfQuantity5;
    document.getElementById("item-5").appendChild(quantityElement);
  }
}
  function addToCart6() {
    let quantityOf6 = document.getElementById("product-6").value;
    let priceOfItem6 = document.getElementById("item-price-6").innerHTML;
    let priceOfQuantity6 = quantityOf6 * priceOfItem6;

    if (quantityOf6 > 0) {
      let row6 = document.createElement("div");
    row6.id = "item-6";
    document.getElementById("cart-items").appendChild(row6);

    let descriptionOfItem6 = document.getElementById("item-6-description").innerHTML;
    let descriptionElement = document.createElement("p");
    descriptionElement.id = "item-description";
    descriptionElement.innerHTML = descriptionOfItem6;
    document.getElementById("item-6").appendChild(descriptionElement);
    
    let quantityElement = document.createElement("p");
    quantityElement.id = "item-description";
    quantityElement.innerHTML = quantityOf6 + " x  $ " + priceOfItem6 + " =  $ " + priceOfQuantity6;
    document.getElementById("item-6").appendChild(quantityElement);
    }
  }

