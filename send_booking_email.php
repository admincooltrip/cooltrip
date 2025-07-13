<?php
// Check if the form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Recipient email address
    $recipient_email = "ktechcreatives@gmail.com";

    // Sanitize and get form data
    $fullname = filter_var($_POST['fullname'], FILTER_SANITIZE_STRING);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $phone = filter_var($_POST['phone'], FILTER_SANITIZE_STRING);
    $destination = filter_var($_POST['destination'], FILTER_SANITIZE_STRING);
    $traveldate = filter_var($_POST['traveldate'], FILTER_SANITIZE_STRING);
    $travelers = filter_var($_POST['travelers'], FILTER_SANITIZE_NUMBER_INT);

    // Email subject
    $subject = "New Trip Booking Request from " . $fullname;

    // Email body
    $email_body = "You have received a new booking request from your website.\n\n";
    $email_body .= "Here are the details:\n";
    $email_body .= "Full Name: " . $fullname . "\n";
    $email_body .= "Email: " . $email . "\n";
    $email_body .= "Phone: " . $phone . "\n";
    $email_body .= "Destination: " . $destination . "\n";
    $email_body .= "Travel Date: " . $traveldate . "\n";
    $email_body .= "Number of Travelers: " . $travelers . "\n";

    // Email headers
    $headers = "From: " . $fullname . " <" . $email . ">\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";

    // Send the email
    if (mail($recipient_email, $subject, $email_body, $headers)) {
        // Send a success response back to the JavaScript
        http_response_code(200);
        echo "Thank you! Your message has been sent.";
    } else {
        // Send an error response back to the JavaScript
        http_response_code(500);
        echo "Oops! Something went wrong and we couldn't send your message.";
    }

} else {
    // Not a POST request
    http_response_code(403);
    echo "There was a problem with your submission, please try again.";
}
?>