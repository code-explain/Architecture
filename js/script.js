$(document).ready(function () {

   $('.project-items').isotope({
      itemSelector: '.project-item',
      layoutMode: 'masonry',
      sortBy: 'original-order'
   });

   $('.project-nav ul li').click(function () {
      $('.project-nav ul li').removeClass('active');
      $(this).addClass('active');

      var selector = $(this).attr('data-filter');
      $('.project-items').isotope({
         filter: selector
      });
      return false;
   });

   $(".owl-carousel").owlCarousel({
      items: 3,
      center: true,
      loop: true,
      nav: true,
      dots: false,
      navText: ["<i class='brands__arrow brands__arrow--l icon-arrows-circle-right'></i>", "<i class='brands__arrow brands__arrow--r icon-arrows-circle-left'></i>"],
      // autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true
   });

});