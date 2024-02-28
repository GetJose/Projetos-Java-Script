let count = 1;
document.getElementById('radio1').checked = true;

setInterval(function () {
    nextImage();
}, 3000)

function nextImage() {
    count++;
    if (count > 4) {
        count = 1;
    }
    document.getElementById('radio' + count).checked = true;
}
const slider = document.querySelector('.slider-alerta--width');
let isTransitioning = false;

function nextSlideAlerta() {
    if (!isTransitioning) {
        isTransitioning = true;
        slider.style.transition = 'margin-left 0.5s ease-in-out';
        slider.style.marginLeft = '-100%';

        setTimeout(() => {
            const firstSlide = slider.children[0];
            slider.appendChild(firstSlide.cloneNode(true));
            slider.style.transition = 'none';
            slider.style.marginLeft = '0';
            slider.removeChild(firstSlide);
            isTransitioning = false;
        }, 500); // Tempo da transição
    }
}

setInterval(nextSlideAlerta, 5000); 