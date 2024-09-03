document.getElementById('hamburger').addEventListener('click', function () {
    document.querySelector('.nav-menu').classList.toggle('active');
});
$(document).ready(function(){
    $('#hoverCarousel').carousel({
        interval: false // Disable automatic cycling
    });

    $('#hoverCarousel').hover(
        function() {
            $(this).carousel('cycle'); // Start cycling on hover
        }, 
        function() {
            $(this).carousel('pause'); // Pause cycling when mouse leaves
        }
    );
});