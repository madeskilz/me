$(function () {
   
    'use strict';
    
    // [05] Scroll To About Section 
    
	$('header .scroll-down').click(function () {
       
        $('body, html').animate({
           
            scrollTop: $('.demos').offset().top - 90 + 'px'
            
        }, 800);
        
    });
    
    
	// [04] Change Navbar Background And Padding
    
	$(window).scroll(function () {

	    var top = jQuery(document).scrollTop(),

	        batas = 20;
	    
	    if (top > batas) {

	        $('.navbar-brog').addClass('nav-sticy');

	    } else {

	        $('.navbar-brog').removeClass('nav-sticy');

	    }

	});	
    
    
    // [01] Fade Out preloader
    
    $(".preloader").delay(1000).fadeOut("slow");
    
    // [03] Auto Type Setup
    
	  $('header .header-content h1 .type').typed({
		strings: ["Designer.","freelancer.","Photographer.","Web developer."],
		loop: true,
		startDelay: 1000,
		backDelay: 2000
	  });
    
});