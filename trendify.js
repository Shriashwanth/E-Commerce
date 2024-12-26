const products = [
    { id: 1, name: "Clothes", price: 899.00, image: "box1-1.jpg", description: "High quality cotton clothes.", rating: 4.5, reviews: ["Great product!", "Very comfortable.", "Good value for money."] },
    { id: 2, name: "Shoes", price: 1499.00, image: "box1-2.jpg", description: "Stylish and comfortable shoes.", rating: 4.0, reviews: ["Nice fit.", "Slightly tight, but good quality."] },
    { id: 3, name: "Watch", price: 2499.00, image: "box1-3.jpg", description: "Elegant watch with leather strap.", rating: 4.7, reviews: ["Beautiful design.", "Perfect for gifting."] },
    { id: 4, name: "Bag", price: 1299.00, image: "box1-4.jpg", description: "Spacious and durable bag.", rating: 4.2, reviews: ["Perfect for everyday use.", "Very spacious."] },
    { id: 5, name: "Mobile", price: 22999.00, image: "box2-1.jpg", description: "Smartphone with latest features.", rating: 4.8, reviews: ["Excellent performance.", "Battery lasts long."] },
    { id: 6, name: "Laptop", price: 59999.00, image: "box2-2.jpg", description: "High performance laptop for work and gaming.", rating: 4.9, reviews: ["Fast and efficient.", "Great for gaming."] }
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
