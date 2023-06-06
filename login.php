<?php
// login.php - Backend code for user login

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
$email = $_POST['email'];
$password = $_POST['password'];


// Retrieve user data from database
$sql = "SELECT * FROM users WHERE email = '$email'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    // Verify password
    if (password_verify($password, $row['password'])) {
        echo "Login successful";
        // Redirect to logged-in user's dashboard or homepage
    } else {
        echo "Incorrect password";
    }
} else {
    echo "User not found";
}

// Close database connection
$conn->close();
