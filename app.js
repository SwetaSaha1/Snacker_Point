function toggleWishlist(element, productName) {
    element.classList.toggle('bi-heart');
    element.classList.toggle('bi-heart-fill');
    
    if (element.classList.contains('bi-heart-fill')) {
        console.log(productName + " added to wishlist!");
        
    } else {
        console.log(productName + " removed from wishlist!");
        
    }
}

// Array to store cart items
let cart = [];

// Function to add a product to the cart
function addToCart(productId) {
// Find the product details based on the product ID
const product = getProductDetails(productId);

// Check if the product is already in the cart
const existingCartItem = cart.find(item => item.id === productId);

if (existingCartItem) {
// If the product is already in the cart, increment the quantity
existingCartItem.quantity++;
} else {
// Otherwise, add the product to the cart with a quantity of 1
cart.push({ ...product, quantity: 1 });
}

// Update the cart count in the navbar
updateCartCount();


console.log(`${product.name} added to cart.`);
}

// Function to get product details based on the product ID
function getProductDetails(productId) {

const products = {
1: { id: 1, name: 'Light Pizza', price: 5.39 },
2: { id: 2, name: 'Marinara Pizza', price: 5.39 },
3: { id: 3, name: 'Smoke Pizza', price: 2.39 },
4: { id: 4, name: 'Cheese Pizza', price: 6.39 },
5: { id: 5, name: 'Simple Pizza', price: 8.39 },
6: { id: 6, name: 'Chicken Pizza', price: 7.39 },

};

return products[productId];
}

// Function to update the cart count in the navbar
function updateCartCount() {
const cartCountElement = document.querySelector('.btn-outline-secondary .bi-cart');
const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
cartCountElement.textContent = ` ${totalItems} Items`;
}