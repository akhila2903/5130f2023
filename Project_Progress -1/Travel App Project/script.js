document.addEventListener('DOMContentLoaded', function () {
    const loginPage = document.getElementById('login-page');
    const signupPage = document.getElementById('signup-page');
    const switchToSignupLink = document.getElementById('switch-to-signup');
    const switchToLoginLink = document.getElementById('switch-to-login');
    const loginSubmitButton = document.getElementById('login-submit');
    const signupSubmitButton = document.getElementById('signup-submit');

    // Function to switch to the signup page
    switchToSignupLink.addEventListener('click', function (e) {
        e.preventDefault();
        loginPage.style.display = 'none';
        signupPage.style.display = 'block';
    });

    // Function to switch to the login page
    switchToLoginLink.addEventListener('click', function (e) {
        e.preventDefault();
        loginPage.style.display = 'block';
        signupPage.style.display = 'none';
    });

    // Handle login form submission
    loginSubmitButton.addEventListener('click', function () {
        // Implement login form submission logic
    });

    // Handle signup form submission
    signupSubmitButton.addEventListener('click', function () {
        const passwordInput = document.getElementById('signup-password');
        const confirmPasswordInput = document.getElementById('confirm-password');
        
        // Get the values of the password and confirm password fields
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        // Verify that the password and confirm password match
        if (password !== confirmPassword) {
            // Display an error message or take appropriate action
            alert('Password and Confirm Password do not match.');
        } else {
            // Passwords match, proceed with signup form submission
            // Implement signup form submission logic
        }
    });
    
    // Handle "Forgot Password" action
    const forgotPasswordLink = document.querySelector('.forgot-password a');
    forgotPasswordLink.addEventListener('click', function (e) {
        e.preventDefault();
        // Handle the "Forgot Password" action here (e.g., open a dialog or navigate to a reset password page).
    });

    const passwordInput = document.getElementById('signup-password');
    const passwordRequirements = document.getElementById('password-requirements');
    let requirementsVisible = false;

    // Toggle password requirements visibility
    passwordInput.addEventListener('click', function () {
        toggleRequirements();
    });

    function toggleRequirements() {
        requirementsVisible = !requirementsVisible;
        passwordRequirements.style.display = requirementsVisible ? 'block' : 'none';
    }

    // Validate password requirements
    passwordInput.addEventListener('input', function () {
        validatePassword(passwordInput.value);
    });

    function validatePassword(password) {
        const lengthRequirement = document.getElementById('length');
        const uppercaseRequirement = document.getElementById('uppercase');
        const lowercaseRequirement = document.getElementById('lowercase');
        const numberRequirement = document.getElementById('number');

        lengthRequirement.classList.toggle('valid', password.length >= 8);
        uppercaseRequirement.classList.toggle('valid', /[A-Z]/.test(password));
        lowercaseRequirement.classList.toggle('valid', /[a-z]/.test(password));
        numberRequirement.classList.toggle('valid', /\d/.test(password));
    }
});
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

const emailInput = document.getElementById('signup-email');
const emailFeedback = document.getElementById('email-feedback');

emailInput.addEventListener('input', function () {
    const email = emailInput.value;
    if (validateEmail(email)) {
        emailFeedback.textContent = 'Valid email address.';
        emailFeedback.className = 'success';
    } else {
        emailFeedback.textContent = 'Invalid email address.';
        emailFeedback.className = 'error';
    }
});
