<?php
// register.php - Backend code for user registration

// Database connection parameters
$servername = "localhost";
$username = "root"; // Replace with your own database username
$password = "Manoj123#"; // Replace with your own database password
$dbname = "farm2home"; // Replace with your own database name

// Create database connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get user data from form
$user_name = $_POST['user_name'];
$user_type = $_POST['user_type'];
$mobile_number = $_POST['mobile_number'];
$email = $_POST['email'];
$password = $_POST['password'];
$retype_password=$_POST['retype_password'];

if ($password == $retype_password) {

    // Hash the password for security
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    // Insert user data into database
    $sql = "INSERT INTO users (user_name, user_type, mobile_number, email, password) VALUES ('$user_name', '$user_type', '$mobile_number', '$email', '$hashedPassword')";
    if ($conn->query($sql) === TRUE) {
        echo "Registration successful";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
    # code...
} else {
    # code..
    echo "Incorrect Password";
}




// Close database connection
$conn->close();
?>
