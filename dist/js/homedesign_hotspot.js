/*---------Our Home Hotspot Hint---------*/

/*$(".hotspot-hint a").click(function(event) {
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
});*/
/*---------END Our Home Hotspot Hint---------*/




/*---------Our Home Hotspot Hint---------*/
$(document).on("click",".hotspot-hint a",function(event)
{
	$('.hint-disk').hide();
	$('.hotspot-hint').removeClass('active');

	event.stopPropagation();	
	$(this).parent().toggleClass('active');
	$(this).parent().find('.hint-disk').toggle();	
});

$(document).click(function()
{
	$('.hint-disk').hide();
	$('.hotspot-hint').removeClass('active');
});
 $(document).on("click",".hint-disk",function(event)
 {
	event.stopPropagation();			
});
/*---------END Our Home Hotspot Hint---------*/