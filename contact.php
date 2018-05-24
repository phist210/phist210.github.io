<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $email_subject = "Contact Form";

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

    if(IsInjected($email))
    {
        echo "Bad email value!";
        exit;
    }

    // create email headers
    $headers = 'From: '.$name."\r\n".
    'Reply-To: '.$email."\r\n";

    if($_POST["submit"]) {
        mail($email, $email_subject, $message, $headers);
    }
    echo "Thank You!" . " -" . "<a href='/' style='text-decoration:none;color:#ff0099;'> Return Home</a>";
?>