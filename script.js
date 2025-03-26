function sendEmail(event) {
    event.preventDefault(); // Prevent form submission (page refresh)

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const service = document.getElementById("service").value;
    const date = document.getElementById("date").value;
    const message = document.getElementById("message").value;

    // Check if any required fields are empty
    if (!name || !email || !phone || !service || !date || !message) {
        alert("Please fill in all required fields.");
        return; // Prevent form submission
    }

    // If all fields are filled, prepare the params and send the email
    let params = {
        name: name,
        email: email,
        phone: phone,
        service: service,
        date: date,
        message: message
    };

    // Send email with EmailJS
    emailjs.send("service_iyx7ux4", "template_zxtpumk", params)
        .then(function(response) {
            alert("We will contact you soon!"); // Success message after sending email
        })
        .catch(function(error) {
            alert("Something went wrong, please try again later."); // Handle error
        });
}
