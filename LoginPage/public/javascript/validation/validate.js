const btn = document.querySelector('.btn');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const togglePassword = document.getElementById('togglePassword');

const expectedEmail = "courseguard";
const expectedPassword = "pass@123";

togglePassword.addEventListener('click', function () {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
});

function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(msg => msg.remove());
}

function showErrorMessage(inputElement, message, position = 'above') {
    const errorElement = document.createElement('p');
    errorElement.classList.add('error-message');
    errorElement.textContent = message;
    errorElement.style.color = 'red';
    errorElement.style.fontSize = '14px';
    errorElement.style.position = 'absolute'; 
    errorElement.style.left = '0';
    errorElement.style.width = '100%'; 

    if (position === 'above') {
        inputElement.parentElement.insertBefore(errorElement, inputElement);
    } else {
        inputElement.parentElement.appendChild(errorElement);
    }
}

btn.addEventListener('click', (e) => {
    e.preventDefault();  

    emailInput.style.border = '';
    passwordInput.style.border = '';
    clearErrors();

    let emailValid = true;
    let passwordValid = true;

    if (emailInput.value.trim() === '') {
        emailInput.style.border = "2px solid red";
        showErrorMessage(emailInput, "Please fill this field", 'below');
        emailValid = false;
    } else if (emailInput.value !== expectedEmail) {
        emailInput.style.border = "2px solid red";
        showErrorMessage(emailInput, "Invalid email");
        emailValid = false;
    }

    if (passwordInput.value.trim() === '') {
        passwordInput.style.border = "2px solid red";
        showErrorMessage(passwordInput, "Please fill this field", 'below');
        passwordValid = false;
    } else if (passwordInput.value !== expectedPassword) {
        passwordInput.style.border = "2px solid red";
        showErrorMessage(passwordInput, "Wrong password");
        passwordValid = false;
    }

    if (emailValid && passwordValid) {
        console.log("Login successful");
        emailInput.style.border = "2px solid green";
        passwordInput.style.border = "2px solid green";
    }
});
