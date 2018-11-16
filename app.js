$(document).ready(function() {
    $(".observers-item").unveil(200);
});

$(".observers-item").unveil(200, function() {
    $(this).load(function() {
        this.style.opacity = 1;
    });
});