function toggleMenu() {
    var nav = document.getElementById('for_logo');
    nav.style.display === 'none' ? nav.style.display = 'block' : nav.style.display = 'none';
}


function sendEmail(event) {
    event.preventDefault(); // Prevent form submission (page refresh)

    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value,
    };

    emailjs.send("service_iyx7ux4", "template_zxtpumk", params)
        .then(function(response) {
            alert("We will contact you soon!"); // Display success message after sending email
        })
        .catch(function(error) {
            alert("Something went wrong, please try again later."); // Handle error
        });
}
