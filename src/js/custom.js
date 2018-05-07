

$(document).ready(function () {  

	$('.dropdown-toggle').dropdown();  





	$('.navbar-toggle').click(function(){

		$('.home .search-wp .search-icon').toggleClass('open-menu');
		$('body').toggleClass('scroll-off');

	});





	

	

	

	$(window).scroll(function(){

	  var sticky = $('body'),

		  scroll = $(window).scrollTop();

	  if (scroll >= 10){ sticky.addClass('sticky-in-home');}

	  else { sticky.removeClass('sticky-in-home');}

	});



	/*sticky nav*/

	// Hide Header on on scroll down

	if (jQuery(window).width() <= 768) {

		var didScroll;

		var lastScrollTop = 0;

		var delta = 5;

		var navbarHeight = jQuery('header').outerHeight();



		jQuery(window).scroll(function(event){

		    didScroll = true;

		});



		setInterval(function() {

		    if (didScroll) {

		        hasScrolled();

		        didScroll = false;

		    }

		}, 250);



		function hasScrolled() {

		    var st = jQuery(this).scrollTop();

		    

		    // Make sure they scroll more than delta

		    if(Math.abs(lastScrollTop - st) <= delta)

		        return;

		    

		    // If they scrolled down and are past the navbar, add class .nav-up.

		    // This is necessary so you never see what is "behind" the navbar.

		    if (st > lastScrollTop && st > navbarHeight){

		        // Scroll Down

		        //jQuery('body').removeClass('header-fixed');

		    } else {

		        // Scroll Up

		        if(st + jQuery(window).height() < jQuery(document).height()) {

		            //jQuery('body').addClass('header-fixed');

		        }

		    }

		    lastScrollTop = st;

		}

	}//end if

});  











/*--------------infinite scroll -----------*/





var htmlclone = $('.lookingsomthing-warp.infinite-scroll .inner-box-warp ul.append-data').html();

//var newdiv = jQuery("<li class='detail-list new'>");

//newdiv.html(htmlclone);



var i = 0;

$(window).on("mousewheel", function(){

	

	

	

	//console.log(data);

	if ($(window).scrollTop() + $(window).height() > $('.cta-block.scroll').position().top ){ 	

		

		

		

		$('.loader').show();

		setTimeout(function() {

			var count = 0;

			var data = '';

			$(htmlclone).each(function (index, value) {

				if( $(value).hasClass('detail-list') ){

					if( count < 2 ){

						//console.log('div' + index + ':' + value); 

						data = data+"<li class='detail-list new'>"+$(this).html()+"</li>";

						count++;

					}

				}

			});

			if (i < 2)

			{	$('.loader').hide();

			 	

				$('.inner-box-warp ul.append-data').append(data);	

			 	i = i + 1;

			}

		}, 2000);

		if (i === 2)

		{	$('.loader').hide();

		 		 	

		}

		

		

	}  			

});







 /*--------------search header-----------*/

 $(document).ready(function() {

            $("#show-search-btn").click(function(){

                $("#show-sw").addClass("open");

            });

            $(".search-wp #close").click(function(){

                $("#show-sw").removeClass("open");

            });



        });

  $(document).ready(function() {

            $("#show-search-btn1").click(function(){

                $("#show-sw1").addClass("open");

            });

            $(".search-wp #close1").click(function(){

                $("#show-sw1").removeClass("open");

            });



        });

	

 /*----------mega menu--------*/

$(document).ready(function(){

	$("#navbar ul li#top-menu").click(function(){

		$("#navbar").slideToggle();

    	$("#resbtn-show").toggleClass('open-men');

   	});



	$( "ul > li.dropdown.mega-dropdown" ).click(function()

	{

		$("#navbar").slideToggle();

    	$("#resbtn-show").toggleClass('open-men');

		//$(this).toggleClass("open-menu");

	});

 });		

		





 /*--------------responsive menu show hide-----------*/

 $("#resbtn-show").click(function(){

    $("#navbar").slideToggle();

    $("#resbtn-show").toggleClass('open-men');

});

 



/*$(document).ready(function(){

  $('.center').slick({ 

	  slidesToShow: 1,

	  slidesToScroll: 1,

	  //centerMode: true, // for set cetnter slider

	  variableWidth: true,

	  infinite: false, // for reapte slider

	  responsive: [{

			breakpoint: 1024,

			settings: {

				slidesToShow: 1,

				slidesToScroll: 1,

				infinite: false, // for reapte slider

				variableWidth: true,

			}

		}, { 

			breakpoint: 480,

			settings: {

				slidesToShow: 1,

				slidesToScroll: 1,

				variableWidth: true,

				infinite: false, // for reapte slider

			}

		}]

   });     

});
*/






/*--------------Form send sucess--------------*/





/*---------start custom select menu for sorting------------*/

  

/*$(".custom-select").each(function() {

  var classes = $(this).attr("class"),

      id      = $(this).attr("id"),

      name    = $(this).attr("name");

  var template =  '<div class="' + classes + '">';

      template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';

      template += '<div class="custom-options">';

      $(this).find("option").each(function() {

        template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';

      });

  template += '</div></div>';

  

  $(this).wrap('<div class="custom-select-wrapper"></div>');

  $(this).hide();

  $(this).after(template);

});

$(".custom-option:first-of-type").hover(function() {

  $(this).parents(".custom-options").addClass("option-hover");

}, function() {

  $(this).parents(".custom-options").removeClass("option-hover");

});





$(".custom-select-trigger").on("click", function(event) {

  $('html').one('click',function() {

    $(".custom-select").removeClass("opened");

  });

  $(this).parents(".custom-select").toggleClass("opened");

  event.stopPropagation();

});









$(".custom-option").on("click", function() {

  $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));

  $(this).parents(".custom-options").find(".custom-option").removeClass("selection");

  $(this).addClass("selection");

  $(this).parents(".custom-select").removeClass("opened");

  $(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());

});*/

/*----------smooth scrolling------------------*/

$(function () {

    $(".nav.nav-tabs").find("a[href*=#]:not([href=#])").click(function () {

        var offset = 0;

        var speed = 1000;

        var target = $(this.hash);



        $("html,body").animate({

            scrollTop: target.offset().top - offset

        }, speed);

    });

});

/*---------top slider images change---------*/



$('#slider1 img').on('click',  function() {

    $('#lightGallery li img').prop('src', this.src);

});

$('#slider1 ul li').click(function() {

    $('#slider1 ul li.active').removeClass('active');

    $(this).closest('#slider1 ul li').addClass('active');

});











/*---------Our Home Hotspot Hint---------*/



$(".hotspot-hint a").click(function(event) {

	$('.hint-disk').hide();

	$('.hotspot-hint').removeClass('active');



	event.stopPropagation();	

	$(this).parent().toggleClass('active');

	$(this).parent().find('.hint-disk').toggle();	

});

$(document).click(function(){

	$('.hint-disk').hide();

	$('.hotspot-hint').removeClass('active');

});

$(".hint-disk").click(function(event) {

	event.stopPropagation();			

});

/*---------END Our Home Hotspot Hint---------*/







/*---------Listing page filter dropdown---------*/





	$('.dropdown-select').on( 'click', '.dropdown-menu li a', function() { 

	   var target = $(this).html();



	   //Adds active class to selected item

	   $(this).parents('.dropdown-menu').find('li').removeClass('active');

	   $(this).parent('li').addClass('active');



	   //Displays selected text on dropdown-toggle button

	   $(this).parents('.dropdown-select').find('.dropdown-toggle').html(target + ' <span class="caret"></span>');

	});

/*---------END Listing page filter dropdown---------*/







 /*======== Read more script==========*/

		jQuery(document).ready(function(){

			jQuery('#read-more').click(function(){            

				jQuery(".read-more-hide").toggleClass("show-content");

				if (jQuery(".tab-pane").find(".show-content")) {                

				   jQuery("#read-more").hide();

				}

			});

		});





/*---------Click to show all video (resident-stories)---------*/



jQuery(document).ready(function(){

	jQuery('.view-all-video').click(function(){            

		$('.testimonial-video ul li').removeClass('hide');

		$(this).hide();

	});

});







/*--------- Slider ---------*/

/*

// select circles for change slider

function slidermain() {

		

		var touchstartX = 0;

		var touchstartY = 0;

		var touchendX = 0;

		var touchendY = 0;

		container = document.querySelector('.tab-pane.active .content-card');	

		// select container					

		var move = 0;

		jQuery('#Homes-for-sale').on('click','.active .nextmove', function(){

			var container = '';

			container = document.querySelector('.tab-pane.active .content-card');	

			var j = $('.tab-pane.active .slider-card').length - 2 ;

			var last = j * 398;			

			if (move > -last) {	

			    move = move - 350;			   

			    container.style.transform = 'translate(' + move + 'px)';

			  }			  

		});

		jQuery('#Homes-for-sale').on('click','.active .prevmove', function(){

			var container = '';

			container = document.querySelector('.tab-pane.active .content-card');					

		     if ( move < 0) {

			    move = move + 398;

			    container.style.transform = 'translate(' + move + 'px)';

			  }			  

		});



		function handleGesure() {

		  var swiped = 'swiped: ';

		  var j = $('.tab-pane.active .slider-card').length - 2 ;

		  var last = j * 398;

		  if (touchendX < touchstartX && move > -last) {

		    move = move - 350;

		    container.style.transform = 'translate(' + move + 'px)';

		  }

		  if (touchendX > touchstartX && move < 0) {

		    move = move + 398;

		    container.style.transform = 'translate(' + move + 'px)';

		  }

		}



		container.addEventListener('touchstart', function (event) {

		  touchstartX = event.touches[0].screenX;

		  touchstartY = event.touches[0].screenY;

		}, false);

		container.addEventListener('touchmove', function (event) {

		  touchendX = event.touches[0].screenX;

		  touchendY = event.touches[0].screenY;

		}, false);

		container.addEventListener('touchend', function (event) {

		  handleGesure();

		}, false);

	}



slidermain();
*/


/*jQuery('a.sigle-tab').on('click', function(){

	slidermain();

});*/



/*

  Convenient helper file for the most commonly used site JS files.

*/
// Utility functions
var Strut = {

  // Random float between min and max
  random: function(min, max) {
    return Math.random() *  (max - min) + min;
  },

  // Returns a random item from an array
  arrayRandom: function(arr) {
    return arr[ Math.floor( Math.random() * arr.length ) ];
  },

  // Linear interpolation between a and b
  // Ex: (100, 200, 0.5) = 150
  interpolate: function(a, b, i) {
    return a*(1-i) + b*i;
  },

  // Calculate how far i is between a and b
  // Ex: (100, 200, 150) = 0.5
  rangePosition: function(a, b, i) {
    return (i-a) / (b-a);
  },

  // Limits a number on both min and max ends
  clamp: function(num, min, max) {
    return Math.max( Math.min( num, max ), min );
  },

  // querySelectorAll as an array
  queryArray: function(selector, node) {
    if (!node) node = document.body;
    return Array.prototype.slice.call(node.querySelectorAll(selector));
  },

  // Handle DOMContentLoaded after document has already been loaded
  ready: function(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  },

  debounce: function (fn, time) {
    let timeout;

    return function() {
      var functionCall = function() {
        return fn.apply(this, arguments);
      }

      clearTimeout(timeout);
      timeout = setTimeout(functionCall, time);
    }
  },

  throttle: function(callback, wait, context) {
    var c = context || this;
    var timeout = null;
    var callbackArgs = null;

    var later = function() {
      callback.apply(c, callbackArgs);
      timeout = null;
    }

    return function() {
      if (!timeout) {
        callbackArgs = arguments;
        timeout = setTimeout(later, wait);
      }
    }
  }

};

// Touch helpers

Strut.touch = {
  isSupported: 'ontouchstart' in window || navigator.maxTouchPoints,
  isDragging: false
};

document.addEventListener('DOMContentLoaded', function() {

  document.body.addEventListener('touchmove', function() {
    Strut.touch.isDragging = true;
  });

  document.body.addEventListener('touchstart', function() {
    Strut.touch.isDragging = false;
  });

});


// Feature detection
// Yes, we should just include modernizr once we have too many of these

Strut.supports = {

  // ES6 support

  es6: !!window.Symbol && !!window.Symbol.species,

  // CSS pointer-events (missing in IE10 and below)
  // https://github.com/Modernizr/Modernizr/blob/master/feature-detects/css/pointerevents.js

  pointerEvents: (function() {
    var style = document.createElement('a').style;
    style.cssText = 'pointer-events:auto';
    return style.pointerEvents === 'auto';
  })(),

  // CSS position: sticky

  positionSticky: Boolean(window.CSS && CSS.supports("(position: -webkit-sticky) or (position: sticky)")),

  // CSS masks or clip-path
  // Replace with a better test once IE support changes -- http://caniuse.com/#search=mask

  masks: (function() {
    return !(/MSIE|Trident|Edge/i.test(navigator.userAgent))
  })(),

};

/*
  Global page navigation
*/
function globalNavDropdowns(selector) {
  var self = this;
  this.container = document.querySelector(selector)
  this.root = this.container.querySelector('.navRoot');

  // Layout

  this.primaryNav = this.root.querySelector('.navSection.primary');
  this.primaryNavItem = this.root.querySelector('.navSection.primary .rootLink:last-child');
  this.secondaryNavItem = this.root.querySelector('.navSection.secondary .rootLink:first-child');

  this.checkCollision();
  window.addEventListener('load', this.checkCollision.bind(this));
  window.addEventListener('resize', this.checkCollision.bind(this));

  // Dropdowns

  this.container.classList.add('noDropdownTransition');

  this.dropdownBackground = this.container.querySelector('.dropdownBackground');
  this.dropdownBackgroundAlt = this.container.querySelector('.alternateBackground');
  this.dropdownRoot = this.container.querySelector('.dropdownRoot');
  this.dropdownContainer = this.container.querySelector('.dropdownContainer');
  this.dropdownArrow = this.container.querySelector('.dropdownArrow');
  this.dropdownRoots = Strut.queryArray('.hasDropdown', this.root);

  this.dropdownSections = Strut.queryArray('.dropdownSection', this.container).map(function(section){
    return {
      el: section,
      name: section.getAttribute('data-dropdown'),
      content: section.querySelector('.dropdownContent')
    }
  });

  // Event handling

  var events = window.PointerEvent ? {
    end: 'pointerup',
    enter: 'pointerenter',
    leave: 'pointerleave'
  } : {
    end: 'touchend',
    enter: 'mouseenter',
    leave: 'mouseleave'
  };

  this.keyDownHandler = null;

  // Root menu items
  this.dropdownRoots.forEach(function(rootEl, i) {

    rootEl.addEventListener(events.end, function(e) {
      e.preventDefault(); // Prevent mouseenter
      e.stopPropagation(); // Stop from propagating to body
      self.toggleDropdown(rootEl);
    });

    rootEl.addEventListener('focusin', function(e) {
      self.stopCloseTimeout();
      self.openDropdown(rootEl, {keyboardNavigation: true});
    });

    rootEl.addEventListener(events.enter, function(e) {
      if (e.pointerType == 'touch') return;
      self.stopCloseTimeout();
      self.openDropdown(rootEl);
    });

    rootEl.addEventListener(events.leave, function(e) {
      if (e.pointerType == 'touch') return;
      self.startCloseTimeout();
    });

  });

  // Dropdown container

  this.dropdownContainer.addEventListener(events.end, function(e) {
    e.stopPropagation(); // Stop from propagating to body
  });

  this.dropdownContainer.addEventListener(events.enter, function(e) {
    if (e.pointerType == 'touch') return;
    self.stopCloseTimeout();
  });

  this.dropdownContainer.addEventListener(events.leave, function(e) {
    if (e.pointerType == 'touch') return;
    self.startCloseTimeout();
  });

  // Body

  document.body.addEventListener(events.end, function(e) {
    if (!Strut.touch.isDragging) self.closeDropdown();
  });

  this.container.classList.add('initialized');
}

globalNavDropdowns.prototype.checkCollision = function() {
  var self = this;

  if (Strut.isMobileViewport) return;

  if (self.compact == true) {
    var bw = document.body.clientWidth;

    // Test if primary nav is too far to the right/off-center
    if (pncr.left + pncr.width/2 > bw/2) {
      self.container.classList.remove('compact');
      self.compact = false;
    }

  } else {
    var picr = self.primaryNavItem.getBoundingClientRect();

    // Test if primary nav overlaps secondary nav
    /*if (picr.right > sicr.left) {
      self.container.classList.add('compact');
      self.compact = true;
    }*/
  }
}

globalNavDropdowns.prototype.registerArrowKeyNavigation = function(rootEl, dropdownEl) {
  var self = this;

  if (this.keyDownHandler !== null) {
    this.unregisterArrowKeyNavigation();
  }

  var dropdownElements = [].slice.call(dropdownEl.querySelectorAll("a"));
  var keyboardCursorPos = 0;
  dropdownElements[keyboardCursorPos].focus();

  this.keyDownHandler = function(e) {
    var TAB = 9;
    var ARROW_UP = 38;
    var ARROW_DOWN = 40;

    if (e.keyCode === TAB) {
      // Focus the top-level navigation item again to enable navigation between tabs
      rootEl.focus();
      self.startCloseTimeout();
    } else if (e.keyCode === ARROW_UP) {
      // Prevent scrolling
      e.preventDefault();

      keyboardCursorPos--;
      if (keyboardCursorPos < 0) {
        keyboardCursorPos += dropdownElements.length
      }

      dropdownElements[keyboardCursorPos].focus();
    } else if (e.keyCode === ARROW_DOWN) {
      // Prevent scrolling
      e.preventDefault();

      keyboardCursorPos++;
      if (keyboardCursorPos >= dropdownElements.length) {
        keyboardCursorPos -= dropdownElements.length;
      }

      dropdownElements[keyboardCursorPos].focus();
    }
  };

  this.container.addEventListener("keydown", this.keyDownHandler);
}

globalNavDropdowns.prototype.unregisterArrowKeyNavigation = function() {
  this.container.removeEventListener("keydown", this.keyDownHandler);
  this.keyDownHandler = null;
}

globalNavDropdowns.prototype.openDropdown = function(rootEl, options) {
  var self = this;

  if (this.activeDropdown === rootEl) return;

  this.container.classList.add('overlayActive');
  this.container.classList.add('dropdownActive');
  this.activeDropdown = rootEl;
  this.activeDropdown.setAttribute('aria-expanded', 'true');

  // Highlight menu item

  this.dropdownRoots.forEach(function(rootEl, i) {
    rootEl.classList.remove('active');
  });

  rootEl.classList.add('active');

  // Show correct section

  var dropdownName = rootEl.getAttribute('data-dropdown');
  var className = 'left';
  var ddWidth, ddHeight;
  var activeContent;

  this.dropdownSections.forEach(function(section){
    section.el.classList.remove('active');
    section.el.classList.remove('left');
    section.el.classList.remove('right');

    if (section.name == dropdownName) {
      section.el.setAttribute('aria-hidden', 'false');
      section.el.classList.add('active');
      className = 'right';
      ddWidth = section.content.offsetWidth;
      ddHeight = section.content.offsetHeight;
      if (!section.content.getAttribute('data-fixed')) {
        // Prevents reflow of the dropdown content
        section.content.style.width = ddWidth + 'px';
        section.content.style.height = ddHeight + 'px';
      } else {
        section.content.setAttribute('data-fixed', true);
      }
      activeContent = section.content;

      if (options && options.keyboardNavigation) {
        self.registerArrowKeyNavigation(rootEl, section.el);
      }
    } else {
      section.el.classList.add(className);
      section.el.setAttribute('aria-hidden', 'true');
    }
  });

  // Move dropdown container

  var origWidth = 400;
  var origHeight = 400;

  var scaleX = ddWidth / origWidth;
  var scaleY = ddHeight / origHeight;
  var rootLinkRect = rootEl.getBoundingClientRect();
  var ddLeft = rootLinkRect.left + rootLinkRect.width/2 - ddWidth/2;
  ddLeft = Math.round(Math.max(ddLeft, 10));

  clearTimeout(this.disableTransitionTimeout);

  this.enableTransitionTimeout = setTimeout(function(){
    self.container.classList.remove('noDropdownTransition');
  }, 50);

  this.dropdownBackground.style.transform = 'translateX(' + ddLeft + 'px) scaleX(' + scaleX + ') scaleY(' + scaleY  + ')';

  this.dropdownContainer.style.transform = 'translateX(' + ddLeft + 'px)';
  this.dropdownContainer.style.width = ddWidth + 'px';
  this.dropdownContainer.style.height = ddHeight + parseInt("30") + 'px';

  // Move arrow

  var arrLeft = Math.round(rootLinkRect.left + rootLinkRect.width/2);
  this.dropdownArrow.style.transform = 'translateX(' + arrLeft + 'px) rotate(45deg)';

  // Move alternating background

  var bgOffset = activeContent.children[0].offsetHeight / scaleY;
  this.dropdownBackgroundAlt.style.transform = 'translateY(' + bgOffset + 'px)'
}

globalNavDropdowns.prototype.closeDropdown = function() {
  var self = this;

  if (!this.activeDropdown) return;

  this.dropdownRoots.forEach(function(rootEl, i) {
    rootEl.classList.remove('active');
  });

  this.dropdownContainer
    .querySelector('[aria-hidden="false"]')
    .setAttribute('aria-hidden', 'true');

  // Disable transitions for the next time a dropdown opens

  clearTimeout(this.enableTransitionTimeout);

  this.disableTransitionTimeout = setTimeout(function(){
    self.container.classList.add('noDropdownTransition');
  }, 50);

  // Hide dropdown

  this.container.classList.remove('overlayActive');
  this.container.classList.remove('dropdownActive');
  this.activeDropdown.setAttribute('aria-expanded', 'false');
  this.activeDropdown = undefined;

  this.unregisterArrowKeyNavigation();
}

globalNavDropdowns.prototype.toggleDropdown = function(rootEl) {
  if (this.activeDropdown === rootEl) this.closeDropdown();
  else this.openDropdown(rootEl);
}

globalNavDropdowns.prototype.startCloseTimeout = function() {
  var self = this;

  self.closeDropdownTimeout = setTimeout(function(){
    self.closeDropdown();
  }, 50);
}

globalNavDropdowns.prototype.stopCloseTimeout = function() {
  var self = this;

  clearTimeout(self.closeDropdownTimeout);
}


/*

  Init

*/

if (!Strut.supports.pointerEvents) {
  Strut.load.css('v3/shared/navigation_ie10.css');
}

Strut.ready(function(){
  new globalNavDropdowns('.globalNav');

  /*
    Attempt to detect when user is navigating with keyboard to
    enable focus highlights on nav elements
  */

  document.body.addEventListener('keydown', function(e) {
    var TAB = 9;
    if (e.keyCode == TAB) document.body.classList.add('keyboard-navigation');
  });

  document.body.addEventListener('click', function(e) {
    document.body.classList.remove('keyboard-navigation');
  });
});