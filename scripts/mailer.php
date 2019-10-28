<?php

    //error_reporting(E_ALL);
    //ini_set('display_errors', 1);

// Only process POST reqeusts.
	if ($_SERVER["REQUEST_METHOD"] == "POST") {

		if(isset($_POST['g-recaptcha-response']) && !empty($_POST['g-recaptcha-response'])){
			//your site secret key
			$secret = '6LfIE4oUAAAAAJMS7WLZphrIB6XDaEJu0NC9b9gq';
			//get verify response data
			$verifyResponse = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret='.$secret.'&response='.$_POST['g-recaptcha-response']);
			$responseData = json_decode($verifyResponse);
		
			if ($responseData->success == false) {

				echo "contact form is temporarily down for maintenance, please hold.";
				

			} else if ($responseData->success == true) {
			  
                // Get the form fields and remove whitespace.
                $name = strip_tags(trim($_POST["name"]));
                $name = str_replace(array("\r","\n"),array(" "," "),$name);
                
                $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
                //$radio = $_POST["exampleRadios"];
                $message = trim($_POST["message"]);

                // Check that data was sent to the mailer.
                if ( empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
                    // Set a 400 (bad request) response code and exit.
                    http_response_code(400);
                    echo "Oops! There was a problem with your submission. Please complete the form and try again.";
                    exit;
                }

                // Set the recipient email address.
                $recipient = "idid@ididntrealize.com";

                // Set the email subject.
                $subject = "New contact from $name";

                // Build the email content.
                $email_content = "Name: $name\n";
                $email_content .= "Email: $email\n\n";
            // $email_content .= "radio Option: $radio\n\n";
                
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
                
                //echo "returned email:" . $recipient . "\n subject:" . $subject . "\n email content:" . $email_content . "\n email headers:" . $email_headers ;

            
			}
		}else{
			echo "dont forget to mark the captcha!";

		}
		
	} else {
		// Not a POST request, set a 403 (forbidden) response code.
		http_response_code(403);
		echo "There was a problem with your submission, please try again.";
	}
?>