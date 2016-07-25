<?php 

/*
Written by Steven Jackson - 21 April 2016

Form Handler to update database table "capsicum_landing_enquiries"
*/ 

/** Email information **/

$admin_email = "stevenjackson.sanguine@gmail.com, graham@roimedia.co.za, enquiry@capsicumcooking.co.za";
$from_email = "enquiry@capsicumcooking.co.za";


/** EMS **/

/** MySQL database name*/
define('DB_NAME', 'capsick_wpdbROI');

/** MySQL database username */
define('DB_USER', 'capsick_6');

/** MySQL database password */
define('DB_PASSWORD', 'MxBrrcy8');
/** MySQL hostname */
define('DB_HOST', 'sql21.jnb1.host-h.net');

/** MySQL Table name */
define('DB_TABLE', 'capsicum_landing_enquiries');

// echo $_POST["fullname"];

// Honey pot field
if (!empty($_POST['address'])) {
	die();
}

// If POST value is set. Assign to variable
$fullname = isset($_POST['fullname']) ? $_POST['fullname'] : null;
$email = isset($_POST['email']) ? $_POST['email'] : null;
$telephone = isset($_POST['telephone']) ? $_POST['telephone'] : null;
$campus = isset($_POST['campus']) ? $_POST['campus'] : null;


// If any of the fields are empty. Redirect to homepage
if (empty($fullname) || empty($email) || empty($telephone) || empty($campus))
if (empty($fullname) || empty($email) || empty($campus)) {
	header("Location: http://capsicumcooking.com/lp-cape-town-general-enquiry");
die();
}

// Timestamp
$timestamp = date("F j, Y, g:i a");

// Page URL
$page_url = $_SERVER['HTTP_REFERER'];

// Create instance of MySQLi
$mysqli = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);

/* check connection */
if ($mysqli->connect_errno) {
	printf("Connect failed: %s\n", $mysqli->connect_error);
	exit();
}

/* Insert Query  */
$mysqli->query("INSERT INTO "
 . DB_TABLE .  " VALUES ( '',
 '" . $fullname . "', 
 '" . $email ."', 
 '" . $telephone ."', 
 '" . $campus ."',
 '" . $timestamp ."',
 '" . $page_url ."'
 );");


	$to = $admin_email; 
	$email_subject = "Cape Town Landing Page submission: $fullname";
	$email_body = "You have received a new message. \n \n".
	" Here are the details:\n Name: $fullname \n Email: $email \n Telephone: $telephone\n Campus: $campus \n Timestamp: $timestamp \n URL: $page_url"; 
	
	$headers = "From: $from_email\n"; 
	$headers .= "Reply-To: $from_email";
	
	mail($to,$email_subject,$email_body,$headers);



// Redirect to Thank you page after insert
header("Location: http://capsicumcooking.com/lp-cape-town-general-enquiry/thank-you.html");

// Close connection
$mysqli->close();


?>