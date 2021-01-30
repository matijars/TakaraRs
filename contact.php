<?php
 
if($_POST) {
    $visitor_name = "";
    $visitor_email = "";
    $visitor_message = "";
    $visitor_subject = "";

    if(isset($_POST['visitor_subject'])) {
        $visitor_subject  = filter_var($_POST['visitor_subject'], FILTER_SANITIZE_STRING);
    }
     
    if(isset($_POST['visitor_name'])) {
        $visitor_name = filter_var($_POST['visitor_name'], FILTER_SANITIZE_STRING);
    }
     
    if(isset($_POST['visitor_email'])) {
        $visitor_email = str_replace(array("\r", "\n", "%0a", "%0d"), '', $_POST['visitor_email']);
        $visitor_email = filter_var($visitor_email, FILTER_VALIDATE_EMAIL);
    }
     
    if(isset($_POST['visitor_message'])) {
        $visitor_message = htmlspecialchars($_POST['visitor_message']);
    }
       
        $recipient = "matijamilosevic1988@gmail.com";
     
    $headers  = 'MIME-Version: 1.0' . "\r\n"
    .'Content-type: text/html; charset=utf-8' . "\r\n"
    ."From: " . $visitor_name . "<". $visitor_email .">\r\n";
     
    if(mail($recipient, $visitor_subject, $visitor_message, $headers)) {
        echo "<script>document.location='contact.html'</script>";
    } else {
        echo "<script>document.location='contact.html'</script>";
    }
     
} else {
    echo '<p>Something went wrong</p>';
}
 
?>