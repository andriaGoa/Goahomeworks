const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
];

let currentIndex = 0;

const imgElement = document.getElementById('carousel-image');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

function updateImage() {
    imgElement.src = images[currentIndex];
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    updateImage();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    updateImage();
});


updateImage();