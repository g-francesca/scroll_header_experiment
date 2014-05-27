	$(document).ready(function() {

		// Header Animation on Scroll
		var headerH = $('#header').innerHeight(),
			mainH = $('.main_img').height(),
			padTop = $('.content_wrapper > article').css('padding-top'),
			sum = parseInt(headerH) + parseInt(mainH) * 0.8 + parseInt(padTop);

	  	$(window).bind('scroll', function(e){
	    
	    var scroll = getCurrentScroll();

	      if ( scroll >= sum ) {
	           $('#header').addClass('shrink');
	        }
	        else {
	            $('#header').removeClass('shrink');
	        }
	    
	    // Image Opacity and Top on Scroll
	    imageScroll();
	      
	    });
	});

	function imageScroll() {
		
		var scrolled = getCurrentScroll();
		
		$('.main_img_wrapper').css('top', (0-(scrolled) * 5));
		$('.main_img_wrapper').css('opacity', (1-(scrolled / 1000 * 2)));

		// Parallax Image Effect 

	    var y_pos = - (scrolled/ $('img.responsive').data('speed')),
    		pos = -40 - parseInt(y_pos) + 'px';
    
        $('img.responsive').css({top: pos});

	}


	function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
    }