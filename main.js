// This function will get the username from the URL parameters
function getUsername() {
    const params = new URLSearchParams(window.location.search);
    return params.get('username');
}

// Display a welcome message with the username
const username = getUsername();
if (username) {
    document.getElementById('welcome-message').textContent = `Welcome, ${username}!`;
}

// Handle service buttons
document.getElementById('need-service-btn').addEventListener('click', function() {
    document.getElementById('service-form').style.display = 'block'; // Show the form
    document.getElementById('request-form').reset(); // Reset the form
});

document.getElementById('provide-service-btn').addEventListener('click', function() {
    document.getElementById('service-form').style.display = 'block'; // Show the form
    document.getElementById('request-form').reset(); // Reset the form
});

// Handle form submission
document.getElementById('request-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Collect the input values
    const serviceType = document.getElementById('service-type').value;
    const serviceDate = document.getElementById('service-date').value;
    const expectedPrice = document.getElementById('expected-price').value;

    // For demonstration, we'll just log the values (You can replace this with actual functionality)
    console.log('Service Type:', serviceType);
    console.log('Service Date:', serviceDate);
    console.log('Expected Price:', expectedPrice);
    
    // Show a confirmation message (you can replace this with your actual submission logic)
    alert(`Service request submitted:\nType: ${serviceType}\nDate: ${serviceDate}\nExpected Price: $${expectedPrice}`);
    
    // Hide the form after submission
    document.getElementById('service-form').style.display = 'none';
});
