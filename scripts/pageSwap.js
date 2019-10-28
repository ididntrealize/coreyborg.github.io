/* Page load function */
		function changePage(event){
			event.preventDefault();
			
			//console.log($(this).attr("href"));
			
				var linkLocation = $(this).attr("href");
				var scrollToLocation = "#mainBodyContainer";
				var navBarHeight = 62;
		
			$("#mainBodyContainer").load(linkLocation, function(){
			
			
				setTimeout(function(){
					/*check if scroll necessary */
						if(linkLocation.includes("#")){
							scrollToLocation = "#" + linkLocation.split("#")[1];
						}
					
					$('html, body').animate({
						scrollTop: $(scrollToLocation).offset().top - navBarHeight
					}, 1000);
				}, 400);
						
			});
			
			//if dropdown toggle is visible, hide menu on click
			    if($('.navbar-toggle').css('display') !='none'){
					$('.navbar-collapse').collapse('hide');
					
				}

			var fileName = linkLocation.split("/")[1],
				 pageName = fileName.split(".")[0],
				 pageNameCapitilized = pageName.charAt(0).toUpperCase() + pageName.slice(1);

			$("title").html(pageNameCapitilized + " - CoreyBorg Web Development");
				
		}