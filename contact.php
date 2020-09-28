<?php

header("X-XXS-Protection: 0");

$con = mysqli_connect('localhost', 'root', '');

if(!$con){
	
	die("Sorry, Couldn't Connect To Server!");
}

$db = mysqli_select_db($con, 'mycv');

if(!$db){

	die("Sorry, Couldn't Open the Database");
}


if(isset($_POST['contact-btn'])){

	$name = htmlspecialchars($_POST['name'], ENT_QUOTES, 'UTF-8');
	$email = htmlspecialchars($_POST['email'], ENT_QUOTES, 'UTF-8');
	$phone = htmlspecialchars($_POST['phone'], ENT_QUOTES, 'UTF-8');
	$message = htmlspecialchars($_POST['message'], ENT_QUOTES, 'UTF-8');

	if(empty($name) || empty($email) || empty($phone) || empty($message)){
	
		header('location: index.php');
		exit();
	}	

	$query = "INSERT into user_info(name,email,phone,message) values('$name','$email','$phone', '$message')";

	 mysqli_query($con, $query);

	 header('location: index.html');
}


?>