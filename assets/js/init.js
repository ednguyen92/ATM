(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.scrollspy').scrollSpy();
    $('.dropdown-trigger').dropdown({
      inDuration: 300,
      outDuration: 225,
      hover: true, // Activate on hover
      // belowOrigin: true, // Displays dropdown below the button
      coverTrigger: false
    });
  }); // end of document ready
})(jQuery); // end of jQuery name space
