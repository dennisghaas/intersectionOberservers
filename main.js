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