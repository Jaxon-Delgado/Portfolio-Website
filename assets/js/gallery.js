let slideIndex = 0; // Initial slide index
const slides = document.querySelectorAll('.cert-image');
const thumbnails = document.querySelectorAll('.gallery-thumbnails img');
const totalSlides = slides.length;

function showSlide() {
    // Hide all slides
    slides.forEach((slide, index) => {
        slide.style.display = 'none';
        thumbnails[index].style.opacity = 0.2; // Set opacity of all thumbnails to 0.7
    });

    // Show the current slide (main image)
    slides[slideIndex].style.display = 'block';
    thumbnails[slideIndex].style.opacity = 1; // Highlight the current thumbnail
}

// Move to the next or previous slide
function moveSlide(direction) {
    slideIndex += direction;

    // Loop back logic
    if (slideIndex < 0) {
        slideIndex = totalSlides - 1; 
    } else if (slideIndex >= totalSlides) {
        slideIndex = 0; 
    }

    showSlide();
}

// Show specific slide based on thumbnail click
function currentSlide(index) {
    slideIndex = index;
    showSlide();
}

// Initial call to show the first slide
showSlide();

// Set interval for automatic slide change
// setInterval(() => moveSlide(1), 5000); // Automatically move to the next slide every 5 seconds