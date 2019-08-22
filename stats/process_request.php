<?php
session_start();
header('Content-Type: application/json');
require_once('private/validate_token.php');
require_once('private/validate_company.php');
require_once('private/validate_hash.php');
require_once('private/save_request.php');

$valid_token = validate_token();
$valid_company = validate_company();
$valid_hash = validate_hash();

if(!$valid_token || !$valid_company || !$valid_hash){
	header('HTTP/1.0 403 Forbidden');
	$res = array(
		"msg" => "Request denied"
	);
	print json_encode($res);
	die();
}
if(save_request($valid_company, $valid_hash)){
	// Valid token and form data
	$res = array(
		"msg" => "Thank you for your request to ".$valid_company."!"
	);
}
else{
	$res = array(
		"msg" => "You already made this request before."
	);
	print json_encode($res);
	die();
}

print json_encode($res);