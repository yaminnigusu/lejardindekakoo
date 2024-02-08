// search.js

// Assuming you have an array of products
// Assuming you have an array of products
const products = [
    { id: 1, name: 'Fiddle Leaf Fig', description: 'Popular indoor plant with large, fiddle-shaped leaves.', price: 2000, image: 'photo_2023-09-14_15-58-58.jpg' },
    { id: 2, name: 'Snake Plant', description: 'Low-maintenance, air-purifying plant with upright leaves.', price: 2000, image: 'snake plant.jpg' },
    { id: 3, name: 'Monstera Deliciosa', description: 'Trendy plant with split leaves, ideal for bright indoor spaces.', price: 1500, image: 'monesta.jpg' },
    { id: 4, name: 'ZZ Plant', description: 'Hardy and drought-tolerant plant with glossy, dark green leaves.', price: 700, image: 'zz.jpg' },
    { id: 5, name: 'Spider Plant', description: 'Easy-to-care-for plant with arching leaves, suitable for hanging baskets.', price: 500, image: 'spider.jpg' },
    { id: 6, name: 'spleenwort fern',description: 'Easy care, arching leaves, ideal for hanging baskets, adds lush elegance.', price: 950 , image: 'fern.jpg'},
    { id: 7, name: 'Fiddle Leaf Fig', description: 'Popular indoor plant with large, fiddle-shaped leaves.', price: 2000, image: 'photo_2023-09-14_15-58-58.jpg' },
    { id: 8, name: 'Snake Plant', description: 'Low-maintenance, air-purifying plant with upright leaves.', price: 2000, image: 'snake plant.jpg' },
    { id: 9, name: 'Monstera Deliciosa', description: 'Trendy plant with split leaves, ideal for bright indoor spaces.', price: 1500, image: 'monesta.jpg' },
    { id: 10, name: 'ZZ Plant', description: 'Hardy and drought-tolerant plant with glossy, dark green leaves.', price: 700, image: 'zz.jpg' },
    { id: 11, name: 'Spider Plant', description: 'Easy-to-care-for plant with arching leaves, suitable for hanging baskets.', price: 500, image: 'spider.jpg' },
    { id: 12, name: 'spleenwort fern',description: 'Easy care, arching leaves, ideal for hanging baskets, adds lush elegance.', price: 950 , image: 'fern.jpg'},
    { id: 13, name: 'Fiddle Leaf Fig', description: 'Popular indoor plant with large, fiddle-shaped leaves.', price: 2000, image: 'photo_2023-09-14_15-58-58.jpg' },
    { id: 14, name: 'Snake Plant', description: 'Low-maintenance, air-purifying plant with upright leaves.', price: 2000, image: 'snake plant.jpg' },
    { id: 15, name: 'Monstera Deliciosa', description: 'Trendy plant with split leaves, ideal for bright indoor spaces.', price: 1500, image: 'monesta.jpg' },
    { id: 16, name: 'ZZ Plant', description: 'Hardy and drought-tolerant plant with glossy, dark green leaves.', price: 700, image: 'zz.jpg' },
    { id: 17, name: 'Spider Plant', description: 'Easy-to-care-for plant with arching leaves, suitable for hanging baskets.', price: 500, image: 'spider.jpg' },
    { id: 18, name: 'spleenwort fern',description: 'Easy care, arching leaves, ideal for hanging baskets, adds lush elegance.', price: 950 , image: 'fern.jpg'},
    { id: 19, name: 'Fiddle Leaf Fig', description: 'Popular indoor plant with large, fiddle-shaped leaves.', price: 2000, image: 'photo_2023-09-14_15-58-58.jpg' },
    { id: 20, name: 'Snake Plant', description: 'Low-maintenance, air-purifying plant with upright leaves.', price: 2000, image: 'snake plant.jpg' },
    { id: 21, name: 'Monstera Deliciosa', description: 'Trendy plant with split leaves, ideal for bright indoor spaces.', price: 1500, image: 'monesta.jpg' },
    { id: 22, name: 'ZZ Plant', description: 'Hardy and drought-tolerant plant with glossy, dark green leaves.', price: 700, image: 'zz.jpg' },
    { id: 23, name: 'Spider Plant', description: 'Easy-to-care-for plant with arching leaves, suitable for hanging baskets.', price: 500, image: 'spider.jpg' },
    { id: 24, name: 'spleenwort fern',description: 'Easy care, arching leaves, ideal for hanging baskets, adds lush elegance.', price: 950 , image: 'fern.jpg'},
    { id: 25, name: 'Fiddle Leaf Fig', description: 'Popular indoor plant with large, fiddle-shaped leaves.', price: 2000, image: 'photo_2023-09-14_15-58-58.jpg' },
    { id: 26, name: 'Snake Plant', description: 'Low-maintenance, air-purifying plant with upright leaves.', price: 2000, image: 'snake plant.jpg' },
    { id: 27, name: 'Monstera Deliciosa', description: 'Trendy plant with split leaves, ideal for bright indoor spaces.', price: 1500, image: 'monesta.jpg' },
    { id: 28, name: 'ZZ Plant', description: 'Hardy and drought-tolerant plant with glossy, dark green leaves.', price: 700, image: 'zz.jpg' },
    { id: 29, name: 'Spider Plant', description: 'Easy-to-care-for plant with arching leaves, suitable for hanging baskets.', price: 500, image: 'spider.jpg' },
    { id: 30, name: 'spleenwort fern',description: 'Easy care, arching leaves, ideal for hanging baskets, adds lush elegance.', price: 950 , image: 'fern.jpg'},
    { id: 31, name: 'Fiddle Leaf Fig', description: 'Popular indoor plant with large, fiddle-shaped leaves.', price: 2000, image: 'photo_2023-09-14_15-58-58.jpg' },
    { id: 32, name: 'Snake Plant', description: 'Low-maintenance, air-purifying plant with upright leaves.', price: 2000, image: 'snake plant.jpg' },
    { id: 33, name: 'Monstera Deliciosa', description: 'Trendy plant with split leaves, ideal for bright indoor spaces.', price: 1500, image: 'monesta.jpg' },
    { id: 34, name: 'ZZ Plant', description: 'Hardy and drought-tolerant plant with glossy, dark green leaves.', price: 700, image: 'zz.jpg' },
    { id: 35, name: 'Spider Plant', description: 'Easy-to-care-for plant with arching leaves, suitable for hanging baskets.', price: 500, image: 'spider.jpg' },
    { id: 36, name: 'spleenwort fern',description: 'Easy care, arching leaves, ideal for hanging baskets, adds lush elegance.', price: 950 , image: 'fern.jpg'},
];

// ... (rest of your code)
const productsPerPage = 10;
let currentPage = 1;

function displayProducts(productsToDisplay) {
    const productsSection = document.getElementById('products');
    productsSection.innerHTML = ''; // Clear the existing product list

    productsToDisplay.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <h2>${product.name}</h2>
            <img src="${product.image}" alt="${product.name}">
            <p>Price: Birr <b>${product.price.toFixed(2)}</b></p>
            
        `;
        productsSection.appendChild(productDiv);
    });
}

function showProducts(page) {
    const startIndex = (page - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const productsToDisplay = products.slice(startIndex, endIndex);
    displayProducts(productsToDisplay);
}

function goToPage(page) {
    if (page >= 1 && page <= Math.ceil(products.length / productsPerPage)) {
        currentPage = page;
        showProducts(currentPage);
    }
}


function addToCart(productId) {
    alert(`Product with ID ${productId} call 0940384999 `);
}

function searchProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const keywords = searchTerm.split(' ');
    // Filter products based on the search term
    const filteredProducts = products.filter(product =>
        keywords.some(keyword =>
            product.name.toLowerCase().includes(keyword) || product.description.toLowerCase().includes(keyword)
            )
    );
    

    // Call a function to update the displayed products with the filtered results
    displayProducts(filteredProducts);
}

// Initialize the product display when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.getElementById('nav-toggle');
    const navUl = document.getElementById('nav').querySelector('ul');

    navToggle.addEventListener('click', function () {
        navUl.classList.toggle('open');
    });

    // Handle navigation links
    const navLinks = document.querySelectorAll('#nav ul a');
    navLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent the default link behavior
            const targetId = this.getAttribute('href').substring(1); // Get the target section id
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Scroll to the target section smoothly
                targetElement.scrollIntoView({ behavior: 'smooth' });

                // Close the navigation menu if it's open
                if (navUl.classList.contains('open')) {
                    navUl.classList.remove('open');
                }
            }
        });
    });
});

// Add your other event listeners and code here
document.addEventListener('DOMContentLoaded', function () {
    displayProducts(products);
    showProducts(currentPage);
    createNavigationButtons(Math.ceil(products.length / productsPerPage));
});




function searchOnEnter(event) {
    if (event.key === 'Enter') {
        searchProducts();
    }
}

function createNavigationButtons(totalPages) {
    const paginationDiv = document.getElementById('pagination');
    paginationDiv.innerHTML = ''; // Clear existing pagination links

    const prevButton = document.createElement('button');
    prevButton.textContent = 'Previous';
    prevButton.addEventListener('click', function () {
        goToPage(currentPage - 1);
    });
    paginationDiv.appendChild(prevButton);

    for (let i = 1; i <= totalPages; i++) {
        const pageLink = document.createElement('button');
        pageLink.textContent = i;

        // Add an event listener to each pagination link to handle click events
        pageLink.addEventListener('click', function () {
            goToPage(i);
        });

        paginationDiv.appendChild(pageLink);
    }

    const nextButton = document.createElement('button');
    nextButton.textContent = 'Next';
    nextButton.addEventListener('click', function () {
        goToPage(currentPage + 1);
    });
    paginationDiv.appendChild(nextButton);
}



















$(document).ready(function () {
    const navToggle = $('#nav-toggle');
    const navUl = $('#nav ul');

    // Close the menu initially on larger screens
    if ($(window).width() > 600) {
        navUl.css('display', 'flex');
    } else {
        navUl.slideUp();
    }

    navToggle.on('click', function () {
        navUl.slideToggle();
        navToggle.toggleClass('active');
    });

    // Close the menu when a navigation link is clicked
    $('#nav ul li a').on('click', function () {
        if ($(window).width() <= 600 && navUl.is(':visible')) {
            navUl.slideUp();
            navToggle.removeClass('active');
        }
    });

    // Make only the button sticky
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 100) {
            $('#nav-toggle').addClass('sticky');
        } else {
            $('#nav-toggle').removeClass('sticky');
        }
    });

    // Adjust the menu display on window resize
    $(window).on('resize', function () {
        if ($(window).width() > 600) {
            navUl.css('display', 'flex');
        } else {
            navUl.css('display', 'none');
        }
    });
});




// Check if the device is a mobile device
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Add an event listener for the "popstate" event (back button)
window.addEventListener('popstate', function (event) {
    if (isMobileDevice()) {
        closeModal();
    }
});

// Add an event listener for clicks outside the modal
document.addEventListener('click', function (event) {
    var modal = document.getElementById('fullscreen-modal');

    // Check if the device is not a mobile device and if the click is outside the modal
    if (!isMobileDevice() && event.target === modal) {
        closeModal();
    }
});

document.addEventListener('keydown', function (event) {
    // Check if the device is not a mobile device
    if (!isMobileDevice()) {
        return;
    }

    // Check if the "Escape" key is pressed
    if (event.key === 'Escape') {
        closeModal();
    }

    // Check if the "Enter" key is pressed
    if (event.key === 'Enter') {
        closeModal();
    }
});

function openFullScreenImage(imageSrc) {
    var modal = document.getElementById('fullscreen-modal');
    var fullscreenImage = document.getElementById('fullscreenImage');
    var body = document.body;

    // Add a class to the body to hide the toggle-down menu
    body.classList.add('modal-open');

    // Display the fullscreen modal
    modal.style.display = 'block';

    // Set the image source for the fullscreen modal
    fullscreenImage.src = imageSrc;

    // Add a history entry to allow the use of the back button (only on mobile devices)
    if (isMobileDevice()) {
        history.pushState(null, null, null);
    }
}

function closeModal() {
    var modal = document.getElementById('fullscreen-modal');
    var body = document.body;

    // Remove the class from the body to show the toggle-down menu
    body.classList.remove('modal-open');

    // Hide the fullscreen modal
    modal.style.display = 'none';

    // Remove the history entry added when opening the modal (only on mobile devices)
    if (isMobileDevice()) {
        history.back();
    }
}




// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Get the navigation element
    var nav = document.getElementById("nav");

    // Get the offset position of the navigation
    var sticky = nav.offsetTop;

    // Function to add sticky class to navigation when scrolled
    function stickNavigation() {
        if (window.pageYOffset >= sticky) {
            nav.classList.add("sticky");
        } else {
            nav.classList.remove("sticky");
        }
    }

    // Attach the function to the scroll event
    window.onscroll = function () {
        stickNavigation();
    };
});


function enroll() {
    alert('You are now enrolled in the Gardening Essentials course!');
}




// script.js or your JavaScript file

// Function to toggle the login form visibility
function toggleLoginForm() {
    var loginForm = document.getElementById('login-form');
    loginForm.style.display = (loginForm.style.display === 'none' || loginForm.style.display === '') ? 'block' : 'none';
}

// Function to handle the enrollment button click

// Add any other JavaScript functions you need for your page



// Function to toggle the login form visibility
function toggleLoginForm() {
    var loginForm = document.getElementById("login-form");
    var nav = document.getElementById("nav");

    if (loginForm.style.display === "none" || loginForm.style.display === "") {
        loginForm.style.display = "block";
        nav.classList.add("open"); // Add this line to open the nav
    } else {
        loginForm.style.display = "none";
        nav.classList.remove("open"); // Add this line to close the nav
    }
}


// Add an event listener to the document to handle clicks
document.addEventListener("click", function (event) {
    var loginForm = document.getElementById("login-form");
    var loginIcon = document.getElementById("login-icon");
    var nav = document.getElementById("nav");

    // Check if the clicked element is the login icon or within the login form
    if (event.target === loginIcon || loginForm.contains(event.target)) {
        return; // Do nothing, as the click is within the login form or on the login icon
    }

    // Check if the clicked element is within the navigation
    if (nav.contains(event.target)) {
        return; // Do nothing, as the click is within the navigation
    }

    // If none of the above conditions are met, hide the login form
    loginForm.style.display = "none";
});
