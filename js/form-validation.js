document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function (event) {
        if (!validateForm()) {
            event.preventDefault(); // Prevent the default form submission
        }
        else{
            alert("Message received, wait for reply")
        }
    });

    function validateForm() {
        const name = document.getElementById("Name").value;
        const email = document.getElementById("email").value;
        const tel = document.getElementById("tel").value;
        const textarea = document.getElementById("customTextarea").value;

        // Simple validation checks
        if (name.trim() === "") { //checking if its empty
            alert("Name cannot be empty");
            return false;
        }

        if (email.trim() === "" || !isValidEmail(email)) { //checking if its empty or wrong
            alert("Please enter a valid email address");
            return false;
        }

        if(tel.trim() === "" || !isValidNumber(tel)){ //checking if its empty or wrong
            alert("Please enter a valid phone number");
            return false;
        }

        if (textarea.trim() === "") { //checking if its empty
            alert("Please enter some text in the textarea");
            return false;
        }

        return true; // Form is valid
    }

    function isValidEmail(email) {
        //validate the email format
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    }

    function isValidNumber(tel){
        //validate the phone number
        const numberPattern = /^\+7\d{10}$/;
        return numberPattern.test(tel);
    }
});
