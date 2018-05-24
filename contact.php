<?php
    $recipient="josh.friese@gmail.com";
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $subject = "Contact Form";

    function IsInjected($str) {
        $injections = array('(\n+)',
            '(\r+)',
            '(\t+)',
            '(%0A+)',
            '(%0D+)',
            '(%08+)',
            '(%09+)'
            );

        $inject = join('|', $injections);
        $inject = "/$inject/i";

        if(preg_match($inject,$str)) {
            return true;
        } else {
            return false;
        }
    }

    if($_POST["submit"]) {

        if(IsInjected($email))
        {
            echo "Bad email value!";
            exit;
        } else {
            mail($recipient, $subject, $message, "From: $name <$email>");
            $thankYou="<p>Thank you! Your message has been sent.</p>";
        }
    }
?>