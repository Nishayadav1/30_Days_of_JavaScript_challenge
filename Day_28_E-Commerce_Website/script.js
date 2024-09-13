const products = [
    {
        name: "Product 1",
        price: 1499, // Price in INR
        description: "This is the description for Product 1.",
        image: "./p1.webp"
    },
    {
        name: "Product 2",
        price: 1999, // Price in INR
        description: "This is the description for Product 2.",
        image: "./p2.avif"
    },
    {
        name: "Product 3",
        price: 2999, // Price in INR
        description: "This is the description for Product 3.",
        image: "./p3.jpeg"
    },
    {
        name: "Product 4",
        price: 3500, // Price in INR
        description: "This is the description for Product 4.",
        image: "./p3.jpeg"
    }
];

const cart = [];

function displayProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>₹${product.price.toFixed(2)}</p>
            <button class="add-to-cart-btn">Add to Cart</button>
        `;

        productList.appendChild(productCard);
    });
}

document.getElementById('product-list').addEventListener('click', function(e) {
    if (e.target.classList.contains('add-to-cart-btn')) {
        const productCard = e.target.closest('.product-card');
        const productName = productCard.querySelector('h3').innerText;
        const product = products.find(p => p.name === productName);
        addToCart(product);
    }
});

function addToCart(product) {
    const cartItem = cart.find(item => item.name === product.name);

    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    displayCart();
}

function calculateTotalPrice() {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

function displayCart() {
    const cartSection = document.getElementById('shopping-cart');
    cartSection.innerHTML = '<h2>Your Cart</h2>';

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';

        cartItem.innerHTML = `
            <h3>${item.name}</h3>
            <p>₹${item.price.toFixed(2)} x ${item.quantity}</p>
            <div>
                <button class="increase-btn">+</button>
                <button class="decrease-btn">-</button>
                <button class="remove-btn">Remove</button>
            </div>
        `;

        cartSection.appendChild(cartItem);
    });

    // Display Total Price
    const totalPrice = calculateTotalPrice();
    const totalPriceElement = document.createElement('div');
    totalPriceElement.className = 'total-price';
    totalPriceElement.innerHTML = `<h3>Total Price: ₹${totalPrice.toFixed(2)}</h3>`;
    cartSection.appendChild(totalPriceElement);
}

document.getElementById('shopping-cart').addEventListener('click', function(e) {
    const productName = e.target.closest('.cart-item').querySelector('h3').innerText;
    const cartItem = cart.find(item => item.name === productName);

    if (e.target.classList.contains('increase-btn')) {
        cartItem.quantity++;
    } else if (e.target.classList.contains('decrease-btn')) {
        cartItem.quantity > 1 ? cartItem.quantity-- : removeFromCart(productName);
    } else if (e.target.classList.contains('remove-btn')) {
        removeFromCart(productName);
    }

    displayCart();
});

function removeFromCart(productName) {
    const cartIndex = cart.findIndex(item => item.name === productName);
    if (cartIndex > -1) cart.splice(cartIndex, 1);
}

document.getElementById('checkout-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const paymentDetails = document.getElementById('payment-details').value;

    alert(`Order placed successfully!\nName: ${name}\nAddress: ${address}\nPayment Details: ${paymentDetails}`);
    cart.length = 0; // Clear the cart
    displayCart(); // Refresh the cart display
    this.reset(); // Reset the checkout form
});

document.addEventListener('DOMContentLoaded', displayProducts);
