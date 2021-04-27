<?php
include_once("dbconnect.php");
$name = $_POST["name"];
$email = $_POST["email"];
$Icnumber = $_POST["Icnumber"];
$phone = $_POST["phone"];
$passa = $_POST["passworda"];
$passb = $_POST["passwordb"];
$shapass = sha1($passa);
$otp = rand(1000, 9999);


if (empty($name) || empty($email) || empty($Icnumber) || empty($phone) || empty($passa) || empty($passb)) {
    echo "<script>alert('Please fill in all required information')</script>";
    echo "<script>window.location.replace('../html/register.html')</script>";
} else {
    $sqlregister = "INSERT INTO tbl_user(email,Icnumber,name,phone,password,otp) VALUES ('$email','$Icnumber','$name','$phone','$shapass','$otp')";

    try {

        $conn->exec($sqlregister);

        echo "<script> alert ('Registration success')</script>";
        echo "<script> window.location.replace('../html/login.html')</script>";
    } catch (PDOException $e) {
        echo "<script> alert ('Registration error')</script>";
        echo "<script> window.location.replace('../html/register.html')</script>";
    }
}
