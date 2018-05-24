<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $email_message = "Form details below.\n\n";

    function clean_string($string) {

        $bad = array("content-type","bcc:","to:","cc:","href");

        return str_replace($bad,"",$string);

    }
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

        if(preg_match($inject,$str))
        {
        return true;
        }
        else
        {
        return false;
        }
    }

    if(IsInjected($email))
    {
        echo "Bad email value!";
        exit;
    }

    $email_message .= "Name: ".clean_string($name)."\n";
    $email_message .= "Email: ".clean_string($email)."\n";
    $email_message .= "Message: ".clean_string($message)."\n";

    // create email headers
    $headers = 'From: '.$email."\r\n".
    'Reply-To: '.$email."\r\n";
    mail($email_to, $email_subject, $email_message, $headers);
    echo "Thank You!" . " -" . "<a href='/' style='text-decoration:none;color:#ff0099;'> Return Home</a>";
?>