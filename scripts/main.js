(function() {
	
	/*align menu items right above hamburger size */
		var docWidth = $(document).width();
		if(docWidth>750){
			$("#navbar ul").addClass("pull-right");
		}
	
	/* initiate home page
		$("#mainBodyContainer").load("page-content/porfolio.html");
	 */
	
	/*Zoom to contact on project page*/
		$(".contactButton").click(function() {
			var navBarHeight = 62;
			//$(".navbar-fixed-top").height();
			
			$('html, body').animate({
				scrollTop: $("#contactSection").offset().top - navBarHeight
			}, 1500);
		});
		
	/*Zoom to top*/
		$(".toTopButton").click(function() {
			$('html, body').animate({
				scrollTop: 0
			}, 1500);
		});	
	
	
	/* shrink menu on scroll */
	$(window).scroll(function() {
	  if ($(document).scrollTop() > 50) {
		$('nav').addClass('shrink');
	  } else {
		$('nav').removeClass('shrink');
	  }
	});
	
	//realign thumbs on xs 
		var containerWidth= $(".container").width();
		if (containerWidth<=750){
			$(".site-thumb").removeClass("pull-right");
			$(".site-thumb").addClass("center-block");
			$(".skill-icon").addClass("center-block");
		}
	
	})();