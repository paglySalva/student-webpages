// Get the button element with the ID "buyButton1"
var buyButton1 = document.getElementById("buyButton1");

// Get the button element with the ID "buyButton2"
var buyButton2 = document.getElementById("buyButton2");

// Add an event listener to the button for the "click" event
buyButton1.addEventListener("click", function () {
  // Display an alert when the button is clicked
  alert("Thank you for purchasing Product 1!");
});

// Add an event listener to the button for the "click" event
buyButton2.addEventListener("click", function () {
  // Display an alert when the button is clicked
  alert("Thank you for purchasing Product 2!");
});
