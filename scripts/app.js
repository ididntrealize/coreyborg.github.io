$(function() {
    // Get the form.
    var form = $('#ajax-contact');

    // Get the messages div.
    var formMessages = $('#form-messages');

   //toggle error messages
	$(".errorDiv").toggle();

	//track past errors
	var erroredName = false,
		erroredEmail = false,
		erroredMessage = false;
	
	//validate email adresses
	function isEmail(email) {
		var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		return regex.test(email);
	}
   
   $(form).submit(function(event) {
		// Stop the browser from submitting the form.
		event.preventDefault();

		var name = $("#name").val(),
			email= $("#email").val(),
			message= $("#message").val();
		
		//Error handling
		if(name==""){
			$("#nameErrorDiv").show();
			erroredName=true;
		}else{
			$("#nameErrorDiv").hide();
			erroredName=false;
		}
		
		
		var validEmail = isEmail(email);
		if (!validEmail){
			$("#emailErrorDiv").show();
			erroredEmail=true;
		}else{
			$("#emailErrorDiv").hide();
			erroredEmail=false;
		}
		
		
		if(message==""){
			$("#messageErrorDiv").show();
			erroredMessage=true;
		}else{
			$("#messageErrorDiv").hide();
			erroredMessage=false;
		}
		
		if(!erroredEmail && !erroredName && !erroredMessage){
			
			// Serialize the form data.
			var formData = $(form).serialize();
			
			// Submit the form using AJAX.
			$.ajax({
				type: 'POST',
				url: $(form).attr('action'),
				data: formData
			})
			.done(function(response) {
				// Make sure that the formMessages div has the 'success' class.
				$(formMessages).removeClass('bg-error');
				$(formMessages).addClass('bg-success');

				// Set the message text.
				$(formMessages).text(response);

				// Clear the form.
				$('#name').val('');
				$('#email').val('');
				$('#message').val('');
			})
			.fail(function(data) {
				// Make sure that the formMessages div has the 'error' class.
				$(formMessages).removeClass('bg-success');
				$(formMessages).addClass('bg-error');

				// Set the message text.
				if (data.responseText !== '') {
					$(formMessages).text(data.responseText);
				} else {
					$(formMessages).text('Oops! An error occured and your message could not be sent.');
				}
			});
		}
		
	});
   
   
});