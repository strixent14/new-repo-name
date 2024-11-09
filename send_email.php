<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form data and sanitize it
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $contact = htmlspecialchars(trim($_POST['contact']));

    // Email address where you want to receive the messages
    $to = "smeejaney@outlook.com"; // Replace with your email address

    // Email subject
    $subject = "New Contact Form Submission from $name";

    // Email content
    $body = "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Contact Number: $contact\n";

    // Email headers
    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        echo "Email sent successfully!";
    } else {
        echo "Email sending failed.";
    }
} else {
    echo "Invalid request method.";
}
?>