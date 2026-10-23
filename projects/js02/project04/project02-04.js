/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: Cameron Krichbaum
      Date:   

      Filename: project02-04.js
 */
 

// Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }
 function calcTotal() {
   var orderTotal = 0;
   var taxRate = 0.05;

   var chicken = document.getElementById("chicken");
   var halibut = document.getElementById("halibut");
   var burger = document.getElementById("burger");
   var salmon = document.getElementById("salmon");
   var salad = document.getElementById("salad");

   if (chicken.checked) {
      orderTotal += parseFloat(chicken.value);
   }

   if (halibut.checked) {
      orderTotal += parseFloat(halibut.value);
   }

   if (burger.checked) {
      orderTotal += parseFloat(burger.value);
   }

   if (salmon.checked) {
      orderTotal += parseFloat(salmon.value);
   }

   if (salad.checked) {
      orderTotal += parseFloat(salad.value);
   }

   var orderTax = orderTotal * taxRate;
   var totalBill = orderTotal + orderTax;

   document.getElementById("foodTotal").textContent =
      formatCurrency(orderTotal);

   document.getElementById("foodTax").textContent =
      formatCurrency(orderTax);

   document.getElementById("totalBill").textContent =
      formatCurrency(totalBill);
}

// Run the calculation whenever a checkbox changes
window.addEventListener("load", function() {
   var items = document.querySelectorAll("input[type='checkbox']");

   items.forEach(function(item) {
      item.addEventListener("change", calcTotal);
   });

   calcTotal();
});
