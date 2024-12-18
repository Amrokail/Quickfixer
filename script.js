// On login form submit, validate credentials and redirect to main platform
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get entered username and password
    const enteredUsername = document.getElementById('username').value;
    const enteredPassword = document.getElementById('password').value;

    // Hardcoded credentials
    const validUsername = 'team8';
    const validPassword = '123';

    // Validate credentials
    if (enteredUsername === validUsername && enteredPassword === validPassword) {
        // Redirect to main platform page with username as a query parameter
        window.location.href = 'main.html?username=' + encodeURIComponent(enteredUsername);
    } else {
        // Show error if credentials are wrong
        alert('Invalid username or password!');
    }
});

// Handle register link (this would ideally redirect to a registration page)
document.getElementById('register-link').addEventListener('click', function() {
    alert('Registration feature is not implemented yet.'); // Placeholder for registration logic
});
