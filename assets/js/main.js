(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.scrollspy').scrollSpy({
      behavior: 'smooth'
    });
    $('.dropdown-trigger').dropdown({
      inDuration: 300,
      outDuration: 225,
      hover: true, // Activate on hover
      // belowOrigin: true, // Displays dropdown below the button
      coverTrigger: false
    });
    $('.carousel.carousel-slider').carousel({
      fullWidth: true,
      indicators: false
   });
      // move next carousel
      $('.moveNextCarousel').click(function(e){
        e.preventDefault();
        e.stopPropagation();
        $('.carousel').carousel('next');
     });
  
     // move prev carousel
     $('.movePrevCarousel').click(function(e){
        e.preventDefault();
        e.stopPropagation();
        $('.carousel').carousel('prev');
     });
  }); // end of document ready
})(jQuery); // end of jQuery name space

jQuery(document).ready(function ($) {
  $(window).load(function () {
      setTimeout(function(){
          $('#preloader').fadeOut('slow', function () {
          });
      },3500);

  });  
});

// $('.carousel.carousel-slider').carousel({
//   fullWidth: true,
//   indicators: true,
// }, setTimeout(autoplay, 4500));

// function autoplay() {
//   $('.carousel').carousel('next');
//   setTimeout(autoplay, 4500);
// } 
