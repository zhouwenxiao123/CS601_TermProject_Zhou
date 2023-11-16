function validateForm(event) {
    
    event.preventDefault();

    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;

    // validation status
    var isValid = true;

    //clear all error messages
    document.getElementById('firstNameError').textContent = '';
    document.getElementById('lastNameError').textContent = '';
    document.getElementById('emailError').textContent = '';

    // regular expression for letters
    var letters = /^[A-Za-z]+$/;

    // validate first name and last name
    if (!firstName.match(letters)) {
        document.getElementById('firstNameError').textContent = 'First name can only contain letters.';
        isValid = false;
    }

    if (!lastName.match(letters)) {
        document.getElementById('lastNameError').textContent = 'Last name can only contain letters.';
        isValid = false;
    }

    // validate email
    var emailPattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(emailPattern)) {
        document.getElementById('emailError').textContent = 'Invalid email format.';
        isValid = false;
    }

    // submit form if all entries are valid
    if (isValid) {
         document.getElementById('submitSuccessMessage').textContent = `✅ Thanks ${firstName}, your comment was received by the server!`;
       
    }
}

