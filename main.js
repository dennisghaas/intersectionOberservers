$(document).ready(function() {
    $(".observers-item").unveil(200);

    $(".observers-item").unveil(200, function() {
        $(this).on('load', function() {
            this.style.opacity = 1;
        });
    });
});



const images = document.querySelectorAll('.observers-item');

observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
    entry.target.classList.add('show');
} else {
    entry.target.classList.remove('show');
}
});
});

images.forEach(image => {
    observer.observe(image);
});