<?php 

/*
Written by Steven Jackson - 21 April 2016

Form Handler to update database table "capsicum_landing_enquiries"
*/ 

/** Email information **/

$admin_email = "stevenjackson.sanguine@gmail.com, graham@roidigital.co.za";
$from_email = "roi-ppc-landing-page@test.co.za";

// Honey pot field
if (!empty($_POST['address'])) {
	die();
}

// If POST value is set. Assign to variable
$name = isset($_POST['name']) ? $_POST['name'] : null;
$email = isset($_POST['email']) ? $_POST['email'] : null;
$contact = isset($_POST['contact']) ? $_POST['contact'] : null;
$audit = isset($_POST['audit']) ? $_POST['audit'] = "Yes, I would like a free Adwords Audit" : "No, I would not like a free Adwords Audit";
$case_study = isset($_POST['case-study']) ? $_POST['case-study'] = "Yes, show me a relevant Case Study" : "No, do not show me a relevant Case Study";


// If any of the fields are empty. Redirect to homepage

if (empty($name) || empty($email) || empty($contact)) {
	header("Location: http://dev3.roimedia.co.za/roi-ppc-landing-page/");
	die();
}


// Timestamp
$timestamp = date("F j, Y, g:i a");

// Page URL
$page_url = $_SERVER['HTTP_REFERER'];


$to = $admin_email; 
$email_subject = "PPC Landing Page submission: $name";
$email_body = "You have received a new message. \n \n".
" Here are the details:\n Name: $name \n Email: $email \n Contact: $contact\n Audit: $audit \n Case Study: $case_study\n Timestamp: $timestamp \n URL: $page_url"; 

$headers = "From: $from_email\n"; 
$headers .= "Reply-To: $from_email";

mail($to,$email_subject,$email_body,$headers);



// Redirect to Thank you page after insert
header("Location: thank-you.html");


?>