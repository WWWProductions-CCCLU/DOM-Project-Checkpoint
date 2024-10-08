// Assume you have an array of cart items like this:
const cartItems = [
  { name: "Item A", price: 10, quantity: 2 },
  { name: "Item B", price: 15, quantity: 1 },
  // ... other items
];

// Function to update the displayed quantity and total price
function updateDisplay() {
  // Update the quantity display for each item
  // Calculate the total price based on the items in the cart
  // Update the total price display
}

// Event listener for "+" button
function handleIncreaseQuantity(itemIndex) {
  cartItems[itemIndex].quantity++;
  updateDisplay();
}

// Event listener for "-" button
function handleDecreaseQuantity(itemIndex) {
  if (cartItems[itemIndex].quantity > 1) {
    cartItems[itemIndex].quantity--;
    updateDisplay();
  }
}

// Event listener for delete button
function handleDeleteItem(itemIndex) {
  cartItems.splice(itemIndex, 1);
  updateDisplay();
}

// Event listener for heart button (toggle liked state)
function handleToggleLike(itemIndex) {
  cartItems[itemIndex].liked = !cartItems[itemIndex].liked;
  updateDisplay();
}

// Add event listeners to buttons (you'll need to select them by class or ID)
document.querySelectorAll(".plus-btn").forEach((btn, index) => {
  btn.addEventListener("click", () => handleIncreaseQuantity(index));
});

// Similar event listeners for "-" button, delete button, and heart button

// Initial display update
updateDisplay();

// Second TRY -----------------------------------
// Assume you have an array of cart items (you can replace this with your actual data)
// const cartItems = [
//     { name: 'Product A', price: 20, quantity: 1 },
//     // Add more items here
// ];

// // Select relevant elements
// const quantityInputs = document.querySelectorAll('.quantity');
// const deleteButtons = document.querySelectorAll('.delete-btn');

// // Event listeners for quantity adjustments
// quantityInputs.forEach((input, index) => {
//     input.addEventListener('change', () => {
//         cartItems[index].quantity = parseInt(input.value);
//         // Update total price and other UI elements
//     });
// });

// // Event listeners for delete buttons
// deleteButtons.forEach((button, index) => {
//     button.addEventListener('click', () => {
//         cartItems.splice(index, 1);
//         // Update UI after deletion
//     });
// });
