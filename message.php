<?php
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$message = $_POST['message'];

if (!empty($email) && !empty($message)){

}
else{
    echo "Email required";
}