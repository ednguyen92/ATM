<?php

if (isset($_POST['submit'])) {
    $firstname = $_POST['first_name'];
    $lastname = $_POST['last_name'];
    $companyname = $_POST['company_name'];
    $phonenumber = $_POST['phonenumber'];
    $mailFrom = $_POST['email'];
    $message = $_POST['message'];

    $mailTo = "ednguyen92@gmail.com";
    $headers = "From: ".$mailFrom;
    $txt = "You have received an email from ".$firstname.".\n\n".$message;

    mail($mailTo, $companyname, $txt, $headers);
    header("Location: index.html?mailsend");

}