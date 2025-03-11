// Ejemplo de JavaScript para un carrusel de imágenes
const images = ["helado1.jpg", "helado2.jpg", "helado3.jpg"];
let currentIndex = 0;

function changeImage() {
    const hero = document.querySelector('.hero');
    hero.style.backgroundImage = `url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeImage, 5000); // Cambia la imagen cada 5 segundos