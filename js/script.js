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

});