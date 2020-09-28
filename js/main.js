/* global $ */

$(document).ready(function (){

	'use strict';

	//Animate Brand Of Page
	var brand = $('.navbar .navbar-brand');

	brand.animate({

		marginLeft: 10

	}, 1000);

	//Active Links Putting The Background and For Colors!
	 $('.navbar-collapse .navbar-nav .nav-item .nav-link').on('click', function() {

		 $(this).addClass('active').siblings('.nav-link').removeClass('active');

		});

	 //Circular Skills (canvas)
	 $('.chart').easyPieChart({
            //your options goes here
        });

	//Show Scroll To Top When Scroll Down
	var scrollingTop = $('.scroll_top');

	$(window).scroll(function() {

	$(this).scrollTop() > 600 ? scrollingTop.show() : scrollingTop.hide();

	});

	scrollingTop.on('click', function() {

		$('html, body').animate({

			scrollTop: 0

		}, 800)

	});

	//Add Hover Line From Left Foreach h1
	$('body h1').addClass('hvr-underline-from-left');

	/* Smooth Scrolling */
	// Select all links with hashes
	$('a[href*="#"]')
	  // Remove links that don't actually link to anything
	  .not('[href="#"]')
	  .not('[href="#0"]')
	  .click(function(event) {
	    // On-page links
	    if (
	      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
	      && 
	      location.hostname == this.hostname
	    ) {
	      // Figure out element to scroll to
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	      // Does a scroll target exist?
	      if (target.length) {
	        // Only prevent default if animation is actually gonna happen
	        event.preventDefault();
	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 1000, function() {
	          // Callback after animation
	          // Must change focus!
	          var $target = $(target);
	          $target.focus();
	          if ($target.is(":focus")) { // Checking if the target was focused
	            return false;
	          } else {
	            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
	            $target.focus(); // Set focus again
	          };
	        });
	      }
	    }
	  });

	  //Adding Sweep Info For Bio List
	  $('.person-bio ul li').addClass('hvr-sweep-to-right');

	  //Make The Home Active When Scroll To Top At The Beginning Of Page
	  $(window).scroll(function(){

	  	if($(this).scrollTop() <= 300){
	  		$('.navbar-collapse .navbar-nav .nav-item:first-of-type').addClass('active');
	  	} else {
	  		$('.navbar-collapse .navbar-nav .nav-item:first-of-type').removeClass('active');
	  	}

	  });

});