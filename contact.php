<?php

if (isset($_POST['submit'])) {
    $firstname = $_POST['first_name'];
    $lastname = $_POST['last_name'];
    $companyname = $_POST['company_name'];
    $phonenumber = $_POST['phonenumber'];
    $mailFrom = $_POST['email'];
    $message = $_POST['message'];

    $mailTo = "ednguyen92@hotmail.com";
    $headers = "From: ".$mailFrom;
    $quoterequest = $companyname." Requesting Quote.";
    $txt = "You've recieved a quote request from: 
    \n Name: ".$firstname." ".$lastname.
    "\n\n Company Name: ".$companyname.
    "\n\n Phone Number: ".$phonenumber.
    "\n\n Message: ".$message;

    mail($mailTo, $quoterequest, $txt, $headers);
    header("Location: index.html");

}
?>