let slideIndex = 0;
let slideInterval;

function showSlides() {
    const slides = document.querySelectorAll(".mySlides");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";

    // Assign the interval to slideInterval
    slideInterval = setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

function plusSlidesNext() {
    // Stop the automatic slideshow when manual navigation is used
    clearTimeout(slideInterval);

    const slides = document.querySelectorAll(".mySlides");
    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";

    // Restart the automatic slideshow
    slideInterval = setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

function plusSlidesPrev() {
    // Stop the automatic slideshow when manual navigation is used
    clearTimeout(slideInterval);

    const slides = document.querySelectorAll(".mySlides");
    slideIndex--;

    if (slideIndex < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";

    // Restart the automatic slideshow
    slideInterval = setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

// Run the function when the page loads
document.addEventListener("DOMContentLoaded", showSlides);
