<?php
	
	error_reporting(E_ALL);
	ini_set('display_errors','On');
	

  // Only process POST reqeusts.
    if(isset($_SERVER['HTTP_X_REQUESTED_WITH']) && !empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest')
	{	
		
		$file = 'log.txt';
		
		$stringData = $_POST['formInfo'];

		file_put_contents($file, "hello world" . $stringData);
		
		
		
		
		
        /* Get the form fields and remove whitespace.
        $name = $_POST["name"];
        $email = $_POST["email"];
        $message = $_POST["message"];

        // Set the recipient email address.
        $recipient = "ididntrealize@gmail.com";

        // Set the email subject.
        $subject = "New message from $name";

        // Build the email content.
        $email_content = "Name: $name\n";
        $email_content .= "Email: $email\n\n";
        $email_content .= "Message:\n$message\n";

        // Build the email headers.
        $email_headers = "From: $name <$email>";

        // Send the email.
        if (mail($recipient, $subject, $email_content, $email_headers)) {
            // Set a 200 (okay) response code.
            http_response_code(200);
            echo "Thank You! Your message has been sent.";
        } else {
            // Set a 500 (internal server error) response code.
            http_response_code(500);
            echo "Oops! Something went wrong and we couldn't send your message.";
        }
		*/

    } else {
        // Not a POST request, set a 403 (forbidden) response code.
        http_response_code(403);
        echo "There was a problem with your submission, please try again.";
    }
	
	

/* Code written from https://bootstrapbay.com/blog/working-bootstrap-contact-form/ 
if (isset($_POST["submit"])){
	// Form Variables 
	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];
	$human = intval($_POST['human']);
	$from = 'Demo Contact Form'; 
	$to = 'example@domain.com'; 
	$subject = 'Message from Contact Demo ';
	
	$body = "From: $name\n E-Mail: $email\n Message:\n $message";

	
	// Form Error Handlers 
	if (!$_POST['name']){
		$errName = 'What should I call you?';
	}
	if (!$_POST['email'] || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
		$errEmail = 'Please enter a valid email address';
	}
	//Check if message has been entered
	if (!$_POST['message']) {
		$errMessage = 'Please enter your message';
	}
	if ($human !== 4) {
		$errHuman = 'I have to check if you are human! Try again!';
	}
	
	// If there are no errors, send the email
	
	if (!$errName && !$errEmail && !$errMessage && !$errHuman) {
		if (mail ($to, $subject, $body, $from)) {
			$result='<div class="alert alert-success">Thank You for messaging me!</div>';
		} else {
			$result='<div class="alert alert-danger">Sorry there was an error sending your message.</div>';
		}
	}
	
}

*/



/*   With validation on front end with javascript 

if (isset($_POST["submit"])){
	
	
	$obj = $_POST['data'];
    

	$name = $obj->name;
	$email = $obj->email;
	$message = $obj->message;
	$human = $obj->human;
	
	
	echo "<div id='test'>name is " . $name . "</div>";
	
	

	$from = 'CoreyB Contact Form';
	$to = 'ididntrealize@gmail.com';
	$subject = 'message from coreyborg';
	$body = "From: $name\n Email: $email\n Message:\n $message";

	if (mail ($to, $subject, $body, $from)) {
			echo '<div class="alert alert-success">Thank You for messaging me!</div>';
		} else {
			echo '<div class="alert alert-danger">Sorry there was an error sending your message.</div>';
		}
		
		
}*/

?> 



