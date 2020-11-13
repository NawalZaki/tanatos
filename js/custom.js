 $(function () {
     
   'use strict'; 
     
$('html').niceScroll({
    
    cursorcolor:'#f7600e',
    cursorwidth: 5,
    cursorborderradius: 0,
    cursorborder: '1px solid #f7600e'
});
     
     $('.header').height($(window).height());
     
     $('.header .arrow i').click(function () {
         
         $('html,body').animate({
             
            scrollTop: $('.features').offset().top
             
         }, 1000);
     });
     
     $('.hire').click(function(){
         
          $('html,body').animate({
             
            scrollTop: $('.our-team').offset().top
             
         }, 1000);
     });
     
     $('.our').click(function(){
         
          $('html,body').animate({
             
            scrollTop: $('.our-work').offset().top
             
         }, 1000);
     });
     
     $('.show-more').click(function () {
         
        $('.our-work .hidden').fadeIn(2000);
        
        
        
         
     }); 
     var leftArrow =$('.testim .fa-chevron-left'),
     rightArrow =$('.testim .fa-chevron-right');
      function checkclient(){

      $('.client:first').hasClass('active') ? leftArrow.fadeOut() : leftArrow.fadeIn() ;
      $('.client:last').hasClass('active') ? rightArrow.fadeOut() : roghtArrow.fadeIn() ;
      
      }
    
     
});
     
   