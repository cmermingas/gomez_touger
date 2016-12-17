<?php
if($_POST){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $name." sent the following information:\n\n";

	foreach($_POST as $key => $value) {
		$message .= $key . ": " . $value . "\n";
	}

//send email
    mail("jtouger@gotofloridalaw.com", "Gotofloridalaw.com email response from " .$email, $message);
}
?>
