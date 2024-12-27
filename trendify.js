const products = [
    { id: 1, name: "Samsung S24", price: 124000.00, image: "Trendifyimg/mobile.jpg", description: "High Quality Camera with meatl body", rating: 4.5, reviews: ["Great product!", "Very comfortable.", "Good value for money."] },
    { id: 2, name: "IPad", price: 99999.00, image: "Trendifyimg/ipad.jpg", description: "Limited Edition IPad-13", rating: 4.0, reviews: ["Nice fit.", "Slightly tight, but good quality."] },
    { id: 3, name: "Gaming HeadSet", price: 4499.00, image: "Trendifyimg/headphone.jpg", description: "Five Different Modes of sound available", rating: 4.7, reviews: ["Beautiful design.", "Perfect for gifting."] },
    { id: 4, name: "IronFlask", price: 1200.00, image: "Trendifyimg/flask.jpg", description: "Long Lasting Premium Flask", rating: 4.2, reviews: ["Perfect for everyday use.", "Very spacious."] },
    { id: 5, name: "Helmet", price: 950.00, image: "Trendifyimg/helmet.jpg", description: "Size adjustable", rating: 4.8, reviews: ["Excellent performance.", "Battery lasts long."] },
    { id: 6, name: "Dumbells", price: 729.00, image: "Trendifyimg/dumbells.jpg", description: "10lb 1-pair Dumbells", rating: 4.9, reviews: ["Fast and efficient.", "Great for gaming."] }
];


        let cart = [];

        function login() {
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (username && password) {
                alert('Login successful!');
                document.getElementById('login-form').style.display = 'none';
                document.getElementById('header').style.display = 'block';
                document.getElementById('carousel').style.display = 'block';
                document.getElementById('offers').style.display = 'block';
                document.getElementById('product-list').style.display = 'flex';
                displayProducts();
                startCarousel();
            } else {
                alert('Please enter both username and password.');
            }
        }

        function startCarousel() {
            let currentSlide = 0;
            const slides = document.querySelectorAll("#carousel img");
            setInterval(() => {
                slides[currentSlide].classList.remove("active");
                currentSlide = (currentSlide + 1) % slides.length;
                slides[currentSlide].classList.add("active");
            }, 3000);
        }



        function displayProducts(filteredProducts = products) {
            const productList = document.getElementById("product-list");
            productList.innerHTML = "";
        
            filteredProducts.forEach(product => {
                const productDiv = document.createElement("div");
                productDiv.classList.add("product");
                productDiv.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>Price: ₹${product.price.toFixed(2)}</p>
                    <div class="rating">Rating: ${product.rating} ★</div>
                    <button onclick="addToCart(${product.id})">Add to Cart</button>
                `;
                productDiv.onclick = () => showProductDetails(product);
                productList.appendChild(productDiv);
            });
        }
        
                function addToCart(productId) {
                    const product = products.find(p => p.id === productId);
                    cart.push(product);
                    updateCartCount();
                }
        
                function updateCartCount() {
                    const cartCount = document.getElementById("cart-count");
                    cartCount.textContent = cart.length;
                }
                function viewCart() {
            const cartItemsDiv = document.getElementById("cart-items");
            const cartTotalDiv = document.getElementById("cart-total-price");
            cartItemsDiv.innerHTML = "";
        
            let total = 0;
            cart.forEach((product, index) => {
                const cartItemDiv = document.createElement("div");
                cartItemDiv.classList.add("cart-item");
                cartItemDiv.innerHTML = `
                    <span>${product.name} - ₹${product.price.toFixed(2)}</span>
                    <button onclick="removeFromCart(${index})">Remove</button>
                `;
                cartItemsDiv.appendChild(cartItemDiv);
                total += product.price;
            });
        
            cartTotalDiv.textContent = total.toFixed(2);
            document.getElementById("cart-modal").style.display = 'flex';
        }
        
        
                function removeFromCart(index) {
                    cart.splice(index, 1);
                    updateCartCount();
                    viewCart();
                }
        
                function closeCart() {
                    document.getElementById("cart-modal").style.display = 'none';
                }
        
        
        
        
                function closeProductModal() {
            document.getElementById("product-modal").style.display = "none";
        }
        
                
        
        function placeOrder() {
            const paymentMethod = document.getElementById("payment-method").value;
            const deliveryTimeDiv = document.getElementById("delivery-time");
        
            // Prompt user for address and mobile number
            const userAddress = prompt("Enter your delivery address:");
            if (!userAddress) {
                alert("Address is required to proceed.");
                return;
            }
        
            const userMobile = prompt("Enter your mobile number (10 digits):");
            if (!/^\d{10}$/.test(userMobile)) {
                alert("Mobile number must contain exactly 10 digits.");
                return;
            }
        
            if (paymentMethod === "cod") {
                // Cash on Delivery
                alert("You have chosen Cash on Delivery.");
                deliveryTimeDiv.textContent = "Estimated Delivery Time: 5-7 Days";
            } else if (paymentMethod === "online") {
                // Online Payment Details
                const cardNumber = prompt("Enter your card number (16 digits):");
                if (!/^\d{16}$/.test(cardNumber)) {
                    alert("Card number must contain exactly 16 digits.");
                    return;
                }
        
                const cardExpiry = prompt("Enter your card expiry date (MM/YY):");
                if (!/^\d{2}\/\d{2}$/.test(cardExpiry)) {
                    alert("Card expiry date must be in the format MM/YY.");
                    return;
                }
        
                const cardCVV = prompt("Enter your card CVV (3 digits):");
                if (!/^\d{3}$/.test(cardCVV)) {
                    alert("Card CVV must contain exactly 3 digits.");
                    return;
                }
        
                alert(`Payment successful! 
                Card Number: **** **** **** ${cardNumber.slice(-4)}`);
                deliveryTimeDiv.textContent = "Estimated Delivery Time: 3-5 Days";
            } else {
                alert("Invalid payment method selected.");
                return;
            }
        
            alert(`Order placed successfully! 
            Address: ${userAddress}
            Mobile: ${userMobile}`);
        
            // Clear the cart after placing the order
            cart = [];
            updateCartCount();
        
            // Refresh the cart modal
            viewCart();
        
            // Close the cart modal
            closeCart();
        }
        
                
        
                function showProductDetails(product) {
            const modal = document.getElementById("product-modal");
            const title = document.getElementById("product-modal-title");
            const table = document.getElementById("product-details-table");
        
            title.textContent = product.name;
            table.innerHTML = `
                <tr>
                    <th>Name</th>
                    <td>${product.name}</td>
                </tr>
                <tr>
                    <th>Price</th>
                    <td>₹${product.price.toFixed(2)}</td>
                </tr>
                <tr>
                    <th>Description</th>
                    <td>${product.description}</td>
                </tr>
                <tr>
                    <th>Rating</th>
                    <td>${product.rating} ★</td>
                </tr>
                <tr>
                    <th>Reviews</th>
                    <td>${product.reviews.join("<br>")}</td>
                </tr>
            `;
        
            modal.style.display = "flex";
        }
        
                function searchProducts() {
                    const searchQuery = document.getElementById("search-box").value.toLowerCase();
                    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchQuery));
                    displayProducts(filteredProducts);
                }
