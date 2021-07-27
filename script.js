function quantityCount(product, isIncrease) {
   const productInput = document.getElementById(product + "Count");
   const productCount = parseInt(productInput.value);
   let productNewCount = productCount;
   if (isIncrease == true) {
      productNewCount = productCount + 1;
   }
   if (isIncrease == false && productCount > 0) {
      productNewCount = productCount - 1;
   }

   productInput.value = productNewCount;

   let productTotal = 0;
   if (product == "airpod") {
      productTotal = productNewCount * 249
   }
   if (product == "watch") {
      productTotal = productNewCount * 399
   }
   document.getElementById(product + "Price").innerText = "$" + productTotal;
   calculateTotal()
}


function calculateTotal() {   
   const airpodCount = getInputValue("airpod");
   const watchCount = getInputValue("watch");
   
   const totalPrice = airpodCount * 249 + watchCount * 399;

   document.getElementById("subTotal").innerText = "$" + totalPrice;

   const tax = Math.round(totalPrice / 10);
   document.getElementById("tax").innerText = "$" + tax;
   document.getElementById("grandTotal").innerText = "$" + (totalPrice + tax);
}


function getInputValue(product) {
   const productInput = document.getElementById(product + "Count");
   const productCount = parseInt(productInput.value);
   return productCount;
}


function checkOut() {
   const grandTotalPrice = document.getElementById("grandTotal").innerText;
   const alertText = document.getElementById("alertText");
   if (grandTotalPrice == "$0") {
      alertText.innerText = "Sir, please buy at least 1 product otherwise my grandma will kick me out of the house! 🥺";
   } else {
      alertText.innerHTML = "Thanks for choosing us! <br>Your product will be shipped via Sundarban Courier soon. 🤗"
   }
}


// function removeItem(id) {
//    if (id == "product1") {
//       const product1 = document.getElementById("product1");
//       product1.style.display = "none"

//       const airpodPrice = document.getElementById("airpodPrice").innerText;
//       const subTotal = document.getElementById("subTotal").innerText;

//       const newSubtotal = (+subTotal) - (+airpodPrice);
//       document.getElementById("subTotal").innerText = newSubtotal;
//    }
//    else if (id == "product2") {
//       const product2 = document.getElementById("product2");
//       product2.style.display = "none"
//    }
// }







// function removeItem(id) {
//    if (id == "product1") {
//       const product1 = document.getElementById("product1");
//       // product1.style.display = "none"
//       const airpodPrice = document.getElementById("airpodPrice").innerText;
//       console.log(airpodPrice);
//    }
//    else if (id == "product2") {
//       const product2 = document.getElementById("product2");
//       product2.style.display = "none"
//    }
// }