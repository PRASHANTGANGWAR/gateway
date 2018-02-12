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