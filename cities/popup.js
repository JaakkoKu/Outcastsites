 document.querySelectorAll(".box img").forEach(image => {
    image.onclick = () => {
        const popup = document.querySelector('.popup-image');
        const popupImg = popup.querySelector('img');

        popup.style.display = 'block';
        popupImg.src = image.getAttribute('src');
    }
});

// Hide popup when clicking outside the image or on the image
document.querySelector('.popup-image').onclick = () => {
    document.querySelector('.popup-image').style.display = "none";
};