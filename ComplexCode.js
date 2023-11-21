/* Filename: ComplexCode.js
   Content: A complex JavaScript code demonstrating the implementation of a web-based store management system */

// Global variables
let inventory = []; // Array to store products inventory
let cart = []; // Array to store items in the user's cart

// Function to display available products
function displayProducts() {
  console.log("Available Products:");
  for (let i = 0; i < inventory.length; i++) {
    console.log("Product ID: " + inventory[i].id);
    console.log("Name: " + inventory[i].name);
    console.log("Price: $" + inventory[i].price);
    console.log("------------------------");
  }
}

// Function to add a new product to the inventory
function addProduct(id, name, price) {
  let product = {
    id: id,
    name: name,
    price: price
  };
  inventory.push(product);
}

// Function to add an item to the cart
function addToCart(productId) {
  let product = inventory.find(item => item.id === productId);
  if (product) {
    cart.push(product);
    console.log("Item added to cart: " + product.name);
  } else {
    console.log("Invalid product ID. Please try again.");
  }
}

// Function to remove an item from the cart
function removeFromCart(productId) {
  let index = cart.findIndex(item => item.id === productId);
  if (index !== -1) {
    let removedItem = cart.splice(index, 1);
    console.log("Item removed from cart: " + removedItem[0].name);
  } else {
    console.log("Invalid product ID. Please try again.");
  }
}

// Function to display the user's cart
function displayCart() {
  console.log("Items in Cart:");
  if (cart.length === 0) {
    console.log("Your cart is empty.");
  } else {
    for (let i = 0; i < cart.length; i++) {
      console.log("Product ID: " + cart[i].id);
      console.log("Name: " + cart[i].name);
      console.log("Price: $" + cart[i].price);
      console.log("------------------------");
    }
  }
}

// Sample inventory data
addProduct(1, "T-Shirt", 19.99);
addProduct(2, "Jeans", 29.99);
addProduct(3, "Shoes", 49.99);

// Test the functionality
displayProducts();
addToCart(1);
addToCart(2);
addToCart(4); // Invalid product ID
displayCart();
removeFromCart(1);
displayCart();