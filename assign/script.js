// Sample products data
const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
    { id: 4, name: 'Product 4', price: 40 },
    { id: 5, name: 'Product 5', price: 50 },
];

// Display products on the page
function displayProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product');
        productItem.innerHTML = `
            <img src="https://via.placeholder.com/150" alt="Product">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productItem);
    });
}

// Add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const cartItems = document.getElementById('cart-items');
        const listItem = document.createElement('li');
        listItem.innerHTML = `${product.name} - $${product.price}`;
        cartItems.appendChild(listItem);
    }
}
// Checkout process
function checkout() {
    // Simulate payment processing
    setTimeout(() => {
        // Clear cart after successful checkout
        const cartItems = document.getElementById('cart-items');
        cartItems.innerHTML = '';
        alert('Thank you for your purchase!');
    }, 1000); // Simulate payment processing time
}

// Initialize the page
function init() {
    displayProducts();
}

// Run initialization when the page is loaded
document.addEventListener('DOMContentLoaded', init);
