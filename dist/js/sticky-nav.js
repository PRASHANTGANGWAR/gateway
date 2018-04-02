$(window).scroll(function(){
	  var sticky = $('body'),
		  scroll = $(window).scrollTop();
	  if (scroll >= 10){ sticky.addClass('sticky-in-home');}
	  else { sticky.removeClass('sticky-in-home');}
	});