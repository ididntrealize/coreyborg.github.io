$(function() {
    // Get the form.
    var form = $('#ajax-contact');;

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
		if(name == "" || name.length > 1000){
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
            const form = document.querySelector('form');

            const data = {};
            const formElements = Array.from(form);
            formElements.map(input => (data[input.name] = input.value));

            
            console.log("form data: ", data)
            console.log("json string for data: ", JSON.stringify(data))

            // Construct an HTTP request
            var xhr = new XMLHttpRequest();
            xhr.open(form.method, form.action, true);
            xhr.setRequestHeader('Accept', 'application/json; charset=utf-8');
            xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

            // Send the collected data as JSON
            xhr.send(JSON.stringify(data));

            // Callback function
            xhr.onloadend = response => {
            if (response.target.status === 200) {
                // The form submission was successful
                form.reset();
                $('#form-messages').addClass('success')
                $('#form-messages').html('Thanks you much, email sent!');
                $('#form-messages').toggle();
            } else {
                // The form submission failed
                $('#form-messages').html('Something went wrong!');
                console.error(JSON.parse(response.target.response).message);
            }
            };
			
	 }
		
	});
   
   
});