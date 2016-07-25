<?php 
$errors = '';
$myemail = 'clientenquiries@roimedia.co,online@quickbooks.co.za,nick.braxton@quickbooks.co.za,Corrin.Magowan@quickbooks.co.za,Wandile.Nkosi@quickbooks.co.za';
if(empty($_POST['name'])  || 
   empty($_POST['email']) || 
   empty($_POST['contact']) || 
   empty($_POST['province']) || 
   empty($_POST['product']) || 
   empty($_POST['industry']) || 
   empty($_POST['company']))
{
    $errors .= "\n Error: all fields are required";
}

$name = $_POST['name']; 
$email= $_POST['email']; 
$contact = $_POST['contact']; 
$province = $_POST['province']; 
$product = $_POST['product']; 
$industry = $_POST['industry']; 
$company = $_POST['company']; 

if (!preg_match(
"/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i", 
$email))
{
    $errors .= "\n Error: Invalid email address";
}

if( empty($errors))
{
	$to = $myemail; 
	$email_subject = "Online Landing Page - Contact form submission: $name";
	$email_body = "You have received a new message. ".
	" Here are the details:\n Name: $name \n Email: $email \n Contact: $contact \n Province: $province \n Product: $product \n Industry: $industry \n Company: $company"; 
	
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