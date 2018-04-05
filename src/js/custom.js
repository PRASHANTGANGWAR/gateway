
$(document).ready(function () {  
	$('.dropdown-toggle').dropdown();  
	

	$('.navbar-toggle').click(function(){
		
		$('.home .search-wp .search-icon').toggleClass('open-menu');
		$('body').toggleClass('scroll-off');



	});


	$(window).scroll(function(){
	  var sticky = $('body'),
		  scroll = $(window).scrollTop();
	  if (scroll >= 1){ sticky.addClass('sticky-in-home')}
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
		}, 50);

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
	
	/*for( i=0; i< 2; i++ ){
		data = data+htmlclone[i];
	}*/
	
	
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
	// -----------------

	$(document).ready(function() {
            $("#show-search-btn_v4").click(function(){
                $("#show-sw_v4").addClass("open");
            });
            $(".search-wp #close").click(function(){
                $("#show-sw_v4").removeClass("open");
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
 
$(document).ready(function(){
	$("#navbar_v4 ul li#top-menu_v4").click(function(){

		alert("navbar");
		$("#navbar_v4").slideToggle();
    	$("#resbtn-show_v4").toggleClass('open-men');
   	});

	$( "ul > li.bold-menu.dropdown.mega-dropdown" ).click(function()
	{
		$("#navbar_v4").slideToggle();
    	$("#resbtn-show_v4").toggleClass('open-men');
		//$(this).toggleClass("open-menu");
	});
 });
		


 /*--------------responsive menu show hide-----------*/
 $("#resbtn-show").click(function(){
    $("#navbar").slideToggle();
    $("#resbtn-show").toggleClass('open-men');
});

 $("#resbtn-show_v4").click(function(){
    $("#navbar_v4").slideToggle();
    $("#resbtn-show_v4").toggleClass('open-men');
});
 



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



$('#getin').click(function(){
    $('body').removeClass('header-fixed');
    $(".navbar-collapse").css("display", "none");
    $("#resbtn-show").toggleClass('open-men');
});

$('#getin2').click(function(){
    $('body').removeClass('header-fixed');
    $(".navbar-collapse").css("display", "none");
    $("#resbtn-show").toggleClass('open-men');

});

$('#getin_v4').click(function(){
    $('body').removeClass('header-fixed');
    $(".navbar-collapse").css("display", "none");
    $("#resbtn-show_v4").toggleClass('open-men');
});


$(document).ready(function(){
    $('.btn').click(function(){
    $('body').removeClass('header-fixed');
    $(".navbar-collapse").css("display", "none");
    $("#resbtn-show_v4").toggleClass('open-men');

});

    $('btn-blue').click(function(){
    $('body').removeClass('header-fixed');
    $(".navbar-collapse").css("display", "none");
    $("#resbtn-show_v4").toggleClass('open-men');
});
});

$('#send-sucess').click(function(){
    if($('body').hasClass('modal-open')){
		$('body').removeClass('header-fixed');
	}
	else{
		$('body').addClass('header-fixed');
	}
});

$('#send-sucess_v4').click(function(){
    if($('body').hasClass('modal-open')){
		$('body').removeClass('header-fixed');
	}
	else{
		$('body').addClass('header-fixed');
	}
});

$('.close').click(function(){
    $('body').addClass('header-fixed');
});


$('.bold-menu a').click(function(){

     $(".navbar-collapse").css("display", "none");
     $("#resbtn-show").toggleClass('open-men');

});


$('.bold-menu a').click(function(){

     $(".navbar-collapse").css("display", "none");
     $("#resbtn-show_v4").toggleClass('open-men');

});

$('.mega-dropdown li a').click(function(){

     $(".navbar-collapse").css("display", "none");
     $("#resbtn-show").toggleClass('open-men');

});

$('.menu2 a').click(function(){

     $(".navbar-collapse").css("display", "none");
     $("#resbtn-show").toggleClass('open-men');

});

$('.img-box h2').click(function(){

     $(".navbar-collapse").css("display", "none");
     $("#resbtn-show").toggleClass('open-men');

});