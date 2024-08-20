const slides = document.querySelectorAll(".slide");
let counter = 0;

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;

    // Add click event listener to each slide
    slide.addEventListener('click', () => {
        goNext(); // Call goNext when a slide is clicked
    });
});

const goPrev = () => {
    counter--;
    if (counter < 0) {
        counter = slides.length - 1; // Loop back to the last slide
    }
    slideImage();
};

const goNext = () => {
    counter++;
    if (counter >= slides.length) {
        counter = 0; // Loop back to the first slide
    }
    slideImage();
};

const slideImage = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(${counter * -100}%)`;
    });
};
