const products = [
    { id: 1, name: "Kid Toys", price: 10.00, image: "https://via.placeholder.com/150" },
    { id: 2, name: "Kithchen Items", price: 15.00, image: "https://via.placeholder.com/150" },
    { id: 3, name: "Washroom Items", price: 20.00, image: "https://via.placeholder.com/150" },
    { id: 4, name: "Bedroom Items", price: 25.00, image: "https://via.placeholder.com/150" },
    { id: 5, name: "Drawing Room Items", price: 30.00, image: "https://via.placeholder.com/150" },
    { id: 6, name: "Tatti Saaf krne ke liye Tissue Paper", price: 35.00, image: "https://via.placeholder.com/150" },
    ];

let cart = [];

function displayProducts() {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>Price: $${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCartCount();
}

function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.innerText = cart.length;
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty. Please add items to your cart before checking out.");
    } else {
        // Here you would typically integrate with a payment gateway
        alert("Proceeding to payment...");
        // For demonstration, we can clear the cart after checkout
        cart = [];
        updateCartCount();
    }
}

// Initialize the product display
displayProducts();