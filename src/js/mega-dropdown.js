
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

  $("#navbar1 ul li#top-menu").click(function(){

    $("#navbar1").slideToggle();

      $("#resbtn-show1").toggleClass('open-men');

    });



  $( "ul > li.dropdown.mega-dropdown" ).click(function()
  {

    $("#navbar1").slideToggle();

      $("#resbtn-show1").toggleClass('open-men');

    //$(this).toggleClass("open-menu");

  });

 });
