let totalBalance = 0;

function addToCart1() {
  let quantityOf1 = document.getElementById("product-1").value;
  let priceOfItem1 = document.getElementById("item-price-1").innerHTML;
  let priceOfQuantity1 = quantityOf1 * priceOfItem1;

  // Check if quantity is greater than 0
  if (quantityOf1 > 0) {
    let existingItem = document.getElementById("item-1");

    if (existingItem) {
      // If item already exists, update the quantity and total price
      let quantityElement = existingItem.querySelector("#item-quantity");
      quantityElement.innerHTML =
        quantityOf1 + " x  $ " + priceOfItem1 + " =  $ " + priceOfQuantity1;
        
        totalBalance += priceOfQuantity1;
        document.getElementById("balance").innerHTML = "Current balance: $ " + totalBalance;
    
      } else {

      let cartItemsContainer = document.getElementById("cart-items");
      let balanceDiv = document.getElementById("balance-div");

      // If item does not exist, create a new entry
      let row1 = document.createElement("div");
      row1.id = "item-1";
      cartItemsContainer.insertBefore(row1, balanceDiv);

      let row2 = document.createElement("div");
      row2.id = "item-1-1";
      document.getElementById("item-1").appendChild(row2);

      let descriptionOfItem1 =
        document.getElementById("item-1-description").innerHTML;
      let descriptionElement = document.createElement("p");
      descriptionElement.id = "item-description";
      descriptionElement.innerHTML = descriptionOfItem1;
      document.getElementById("item-1-1").appendChild(descriptionElement);

      let quantityElement = document.createElement("p");
      quantityElement.id = "item-quantity"; // Use a unique ID for quantity
      quantityElement.innerHTML =
        quantityOf1 + " x  $ " + priceOfItem1 + " =  $ " + priceOfQuantity1;
      document.getElementById("item-1-1").appendChild(quantityElement);

      let removeButton = document.createElement("button");
      removeButton.id = "remove-item-1";
      removeButton.innerHTML = "Remove"; // Add text to the button
      document.getElementById("item-1").appendChild(removeButton);
    
      totalBalance += priceOfQuantity1;
      document.getElementById("balance").innerHTML = "Current balance: $ " + totalBalance;
 
      // Add event listener to remove item button
      removeButton.addEventListener("click", function() {
        row1.remove();
        document.getElementById("product-1").value = "0";
        totalBalance -= priceOfQuantity1;
        document.getElementById("balance").innerHTML = "Current balance: $ " + totalBalance;
      });
    }
  }
}

function addToCart2() {
  let quantityOf2 = document.getElementById("product-2").value;
  let priceOfItem2 = document.getElementById("item-price-2").innerHTML;
  let priceOfQuantity2 = quantityOf2 * priceOfItem2;

  if (quantityOf2 > 0) {
    let existingItem1 = document.getElementById("item-2");

    if (existingItem1) {
      // If item already exists, update the quantity and total price
      let quantityElement1 = existingItem1.querySelector("#item-quantity");
      quantityElement1.innerHTML =
        quantityOf2 + " x  $ " + priceOfItem2 + " =  $ " + priceOfQuantity2;
        totalBalance += priceOfQuantity2;
        document.getElementById("balance").innerHTML = "Current balance: $ " + totalBalance;
    
      } else {

      let cartItemsContainer = document.getElementById("cart-items");
      let balanceDiv = document.getElementById("balance-div");

      let row2 = document.createElement("div");
      row2.id = "item-2";
      cartItemsContainer.insertBefore(row2, balanceDiv);

      let newRow = document.createElement("div");
      newRow.id = "item-2-1";
      document.getElementById("item-2").appendChild(newRow);

      let descriptionOfItem2 =
        document.getElementById("item-2-description").innerHTML;
      let descriptionElement = document.createElement("p");
      descriptionElement.id = "item-description";
      descriptionElement.innerHTML = descriptionOfItem2;
      document.getElementById("item-2-1").appendChild(descriptionElement);

      let quantityElement = document.createElement("p");
      quantityElement.id = "item-quantity";
      quantityElement.innerHTML =
        quantityOf2 + " x  $ " + priceOfItem2 + " =  $ " + priceOfQuantity2;
      document.getElementById("item-2-1").appendChild(quantityElement);

      let removeButton = document.createElement("button");
      removeButton.id = "remove-item-1";
      removeButton.innerHTML = "Remove"; // Add text to the button
      document.getElementById("item-2").appendChild(removeButton);
      totalBalance += priceOfQuantity2;
      document.getElementById("balance").innerHTML = "Current balance: $ " + totalBalance;
    
      // Add event listener to remove item button
      removeButton.addEventListener("click", function() {
        row2.remove();
        document.getElementById("product-2").value = "0";

        totalBalance -= priceOfQuantity2;
        document.getElementById("balance").innerHTML = "Current balance: $ " + totalBalance;
      });
    }
  }
}
function addToCart3() {
  let quantityOf3 = document.getElementById("product-3").value;
  let priceOfItem3 = document.getElementById("item-price-3").innerHTML;
  let priceOfQuantity3 = quantityOf3 * priceOfItem3;

  if (quantityOf3 > 0) {
    let existingItem = document.getElementById("item-3");

    if (existingItem) {
      // If item already exists, update the quantity and total price
      let quantityElement = existingItem.querySelector("#item-quantity");
      quantityElement.innerHTML =
        quantityOf3 + " x  $ " + priceOfItem3 + " =  $ " + priceOfQuantity3;
    
        totalBalance += priceOfQuantity3;
        document.getElementById("balance").innerHTML = "Current balance: $ " + totalBalance;
    
      } else {

      let cartItemsContainer = document.getElementById("cart-items");
      let balanceDiv = document.getElementById("balance-div");


      let row3 = document.createElement("div");
      row3.id = "item-3";
      cartItemsContainer.insertBefore(row3, balanceDiv);


      let row2 = document.createElement("div");
      row2.id = "item-3-1";
      document.getElementById("item-3").appendChild(row2);

      let descriptionOfItem3 =
        document.getElementById("item-3-description").innerHTML;
      let descriptionElement = document.createElement("p");
      descriptionElement.id = "item-description";
      descriptionElement.innerHTML = descriptionOfItem3;
      document.getElementById("item-3-1").appendChild(descriptionElement);

      let quantityElement = document.createElement("p");
      quantityElement.id = "item-quantity";
      quantityElement.innerHTML =
        quantityOf3 + " x  $ " + priceOfItem3 + " =  $ " + priceOfQuantity3;
      document.getElementById("item-3-1").appendChild(quantityElement);

      let removeButton = document.createElement("button");
      removeButton.id = "remove-item-1";
      removeButton.innerHTML = "Remove"; // Add text to the button
      document.getElementById("item-3").appendChild(removeButton);
    
      totalBalance += priceOfQuantity3;
      document.getElementById("balance").innerHTML = "Current balance: $ " + totalBalance;
      // Add event listener to remove item button
      removeButton.addEventListener("click", function() {
        row3.remove();
        document.getElementById("product-3").value = "0";

        totalBalance -= priceOfQuantity3;
        document.getElementById("balance").innerHTML = "Current balance: $ " + totalBalance;
      });
    }
  }
}
function addToCart4() {
  let quantityOf4 = document.getElementById("product-4").value;
  let priceOfItem4 = document.getElementById("item-price-4").innerHTML;
  let priceOfQuantity4 = quantityOf4 * priceOfItem4;

  if (quantityOf4 > 0) {
    let existingItem = document.getElementById("item-4");

    if (existingItem) {
      // If item already exists, update the quantity and total price
      let quantityElement = existingItem.querySelector("#item-quantity");
      quantityElement.innerHTML =
        quantityOf4 + " x  $ " + priceOfItem4 + " =  $ " + priceOfQuantity4;
        totalBalance += priceOfQuantity4;
        document.getElementById("balance").innerHTML = "Current balance: $ " + totalBalance;
    
      } else {

      let cartItemsContainer = document.getElementById("cart-items");
      let balanceDiv = document.getElementById("balance-div");

      let row4 = document.createElement("div");
      row4.id = "item-4";
      cartItemsContainer.insertBefore(row4, balanceDiv);


      let row2 = document.createElement("div");
      row2.id = "item-4-1";
      document.getElementById("item-4").appendChild(row2);

      let descriptionOfItem4 =
        document.getElementById("item-4-description").innerHTML;
      let descriptionElement = document.createElement("p");
      descriptionElement.id = "item-description";
      descriptionElement.innerHTML = descriptionOfItem4;
      document.getElementById("item-4-1").appendChild(descriptionElement);

      let quantityElement = document.createElement("p");
      quantityElement.id = "item-quantity";
      quantityElement.innerHTML =
        quantityOf4 + " x  $ " + priceOfItem4 + " =  $ " + priceOfQuantity4;
      document.getElementById("item-4-1").appendChild(quantityElement);

      let removeButton = document.createElement("button");
      removeButton.id = "remove-item-1";
      removeButton.innerHTML = "Remove"; // Add text to the button
      document.getElementById("item-4").appendChild(removeButton);
    
      totalBalance += priceOfQuantity4;
      document.getElementById("balance").innerHTML = "Current balance: $ " + totalBalance;

      // Add event listener to remove item button
      removeButton.addEventListener("click", function() {
        row4.remove();
        document.getElementById("product-4").value = "0";

        totalBalance -= priceOfQuantity4;
        document.getElementById("balance").innerHTML = "Current balance: $ " + totalBalance;
      });
    }
  }
}
function addToCart5() {
  let quantityOf5 = document.getElementById("product-5").value;
  let priceOfItem5 = document.getElementById("item-price-5").innerHTML;
  let priceOfQuantity5 = quantityOf5 * priceOfItem5;

  if (quantityOf5 > 0) {
    let existingItem = document.getElementById("item-5");

    if (existingItem) {
      // If item already exists, update the quantity and total price
      let quantityElement = existingItem.querySelector("#item-quantity");
      quantityElement.innerHTML =
        quantityOf5 + " x  $ " + priceOfItem5 + " =  $ " + priceOfQuantity5;
    
        totalBalance += priceOfQuantity5;
        document.getElementById("balance").innerHTML = "Current balance: $ " + totalBalance;
      } else {

      let cartItemsContainer = document.getElementById("cart-items");
      let balanceDiv = document.getElementById("balance-div");


      let row5 = document.createElement("div");
      row5.id = "item-5";
      cartItemsContainer.insertBefore(row5, balanceDiv);

      let row2 = document.createElement("div");
      row2.id = "item-5-1";
      document.getElementById("item-5").appendChild(row2);

      let descriptionOfItem5 =
        document.getElementById("item-5-description").innerHTML;
      let descriptionElement = document.createElement("p");
      descriptionElement.id = "item-description";
      descriptionElement.innerHTML = descriptionOfItem5;
      document.getElementById("item-5-1").appendChild(descriptionElement);

      let quantityElement = document.createElement("p");
      quantityElement.id = "item-quantity";
      quantityElement.innerHTML =
        quantityOf5 + " x  $ " + priceOfItem5 + " =  $ " + priceOfQuantity5;
      document.getElementById("item-5-1").appendChild(quantityElement);

      let removeButton = document.createElement("button");
      removeButton.id = "remove-item-1";
      removeButton.innerHTML = "Remove"; // Add text to the button
      document.getElementById("item-5").appendChild(removeButton);
    
      totalBalance += priceOfQuantity5;
      document.getElementById("balance").innerHTML = "Current balance: $ " + totalBalance;
      // Add event listener to remove item button
      removeButton.addEventListener("click", function() {
        row5.remove();
        document.getElementById("product-5").value = "0";

        totalBalance -= priceOfQuantity5;
        document.getElementById("balance").innerHTML = "Current balance: $ " + totalBalance;
      });
    }
  }
}
function addToCart6() {
  let quantityOf6 = document.getElementById("product-6").value;
  let priceOfItem6 = document.getElementById("item-price-6").innerHTML;
  let priceOfQuantity6 = quantityOf6 * priceOfItem6;

  if (quantityOf6 > 0) {
    let existingItem = document.getElementById("item-6");

    if (existingItem) {
      // If item already exists, update the quantity and total price
      let quantityElement = existingItem.querySelector("#item-quantity");
      quantityElement.innerHTML =
        quantityOf6 + " x  $ " + priceOfItem6 + " =  $ " + priceOfQuantity6;
        totalBalance += priceOfQuantity6;
        document.getElementById("balance").innerHTML = "Current balance: $ " + totalBalance;
    
      } else {

      let cartItemsContainer = document.getElementById("cart-items");
      let balanceDiv = document.getElementById("balance-div");


      let row6 = document.createElement("div");
      row6.id = "item-6";
      cartItemsContainer.insertBefore(row6, balanceDiv);

      let row2 = document.createElement("div");
      row2.id = "item-6-1";
      document.getElementById("item-6").appendChild(row2);

      let descriptionOfItem6 =
        document.getElementById("item-6-description").innerHTML;
      let descriptionElement = document.createElement("p");
      descriptionElement.id = "item-description";
      descriptionElement.innerHTML = descriptionOfItem6;
      document.getElementById("item-6-1").appendChild(descriptionElement);

      let quantityElement = document.createElement("p");
      quantityElement.id = "item-quantity";
      quantityElement.innerHTML =
        quantityOf6 + " x  $ " + priceOfItem6 + " =  $ " + priceOfQuantity6;
      document.getElementById("item-6-1").appendChild(quantityElement);

      let removeButton = document.createElement("button");
      removeButton.id = "remove-item-1";
      removeButton.innerHTML = "Remove"; // Add text to the button
      document.getElementById("item-6").appendChild(removeButton);
    
      totalBalance += priceOfQuantity6;
      document.getElementById("balance").innerHTML = "Current balance: $ " + totalBalance;
      // Add event listener to remove item button
      removeButton.addEventListener("click", function() {
        row6.remove();
        document.getElementById("product-6").value = "0";

        totalBalance -= priceOfQuantity6;
        document.getElementById("balance").innerHTML = "Current balance: $ " + totalBalance;
      });
    }
  }
}
