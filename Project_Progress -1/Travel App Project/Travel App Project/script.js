document.addEventListener('DOMContentLoaded', function () {
    const loginPage = document.getElementById('login-page');
    const signupPage = document.getElementById('signup-page');
    const switchToSignupLink = document.getElementById('switch-to-signup');
    const switchToLoginLink = document.getElementById('switch-to-login');
    const loginSubmitButton = document.getElementById('login-submit');
    const signupSubmitButton = document.getElementById('signup-submit');

    switchToSignupLink.addEventListener('click', function (e) {
        e.preventDefault();
        loginPage.style.display = 'none';
        signupPage.style.display = 'block';
    });

    switchToLoginLink.addEventListener('click', function (e) {
        e.preventDefault();
        loginPage.style.display = 'block';
        signupPage.style.display = 'none';
    });

    loginSubmitButton.addEventListener('click', function () {
        // Handle login form submission
    });

    signupSubmitButton.addEventListener('click', function () {
        // Handle signup form submission
    });
});
