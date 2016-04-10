<?php 
$errors = '';

// $myemail = 'steven@roimedia.co.za';
$myemail = 'bluetraincampaign@aasa.co.za';

if(empty($_POST['name'])  || 
   empty($_POST['email']) ||
   empty($_POST['phone']) || 
   empty($_POST['surname']))
{
    $errors .= "\n Error: all fields are required";
}

$name = $_POST['name']; 
$email = $_POST['email']; 
$phone = $_POST['phone'];  
$surname = $_POST['surname']; 
$address = $_POST['address'];


if( empty($errors))
{
	
	$to = $myemail; 
	$email_subject = "Contact form submission: $name";
	$email_body = "You have received a new message. ".
	" Here are the details:\n Name: $name \n surname \n $surname Email: $email \n Phone Number: $phone"; 
	
	$headers = "From: $myemail\n"; 
	$headers .= "Reply-To: $email";
	
	mail($to,$email_subject,$email_body,$headers);
	//redirect to the 'thank you' page
	header('Location: thank-you.html');
} 




?>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"> 
<html>
<head>
	<title>Contact form handler</title>
</head>

<body>
<!-- This page is displayed only if there is some error -->
<?php
echo nl2br($errors);
?>


</body>
</html>