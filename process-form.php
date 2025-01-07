<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Include PHPMailer files
require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Sanitize form inputs
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Initialize PHPMailer
    $mail = new PHPMailer(true);

    try {
        // SMTP configuration
        $mail->isSMTP();
        $mail->Host = 'smtp.sendgrid.net'; // SendGrid SMTP server
        $mail->SMTPAuth = true;
        $mail->Username = 'apikey'; // Always use 'apikey' as the username
        $mail->Password = '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'; // Replace with your actual SendGrid API key
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Email settings
        $mail->setFrom('awaisashraf4200@gmail.com'); // Replace with your verified sender email
        $mail->addAddress('tradeya.enterprises@gmail.com'); // Replace with the recipient's email

        // Email content
        $mail->isHTML(true);
        $mail->Subject = 'New Form Submission';
        $mail->Body = "
            <h1>New Form Submission</h1>
            <p><strong>Name:</strong> $name</p>
            <p><strong>Email:</strong> $email</p>
            <p><strong>Message:</strong> $message</p>
        ";
        $mail->AltBody = "Name: $name\nEmail: $email\nMessage:\n$message";

        // Send email
        $mail->send();
        echo "Your message has been sent successfully!";
    } catch (Exception $e) {
        echo "Message could not be sent. Error: {$mail->ErrorInfo}";
    }
} else {
    echo "Invalid request.";
}

