const form = document.querySelector('form');
const email = document.getElementById('email');
const mailError = document.getElementById('mail-error');
const country = document.getElementById('country');
const countryError = document.getElementById('country-error');
const postal = document.getElementById('postal');
const postalError = document.getElementById('postal-error');
const password = document.getElementById('password');
const passwordError = document.getElementById('password-error');
const pconfirm = document.getElementById('confirm');
const confirmError = document.getElementById('confirm-error');
const submit = document.getElementById('submit');


email.addEventListener('blur', () => {
    if(email.value.trimStart() == ''){
        email.setCustomValidity('Please enter an email!');
    }
    else{
        email.setCustomValidity('');
    }
    
    mailError.textContent = email.validationMessage;
});

country.addEventListener('blur', () => {
    if(country.value.trimStart() == ''){
        country.setCustomValidity('Enter a country');
    }
    else{
        country.setCustomValidity('');
    }

    countryError.textContent = country.validationMessage;
})

postal.addEventListener('blur', () => {
    if(postal.value.length != 5 || postal.value.trimStart() == ''){
        postal.setCustomValidity('Postal code must be 5 digits');
    }
    else{
        postal.setCustomValidity('');
    }

    postalError.textContent = postal.validationMessage;
})

password.addEventListener('blur', () => {
    if(password.validity.tooShort || password.value.trimStart() == ''){
        password.setCustomValidity('Password must be at least 8 characters');
    }
    else{
        password.setCustomValidity('');
    }

    passwordError.textContent = password.validationMessage;
})

pconfirm.addEventListener('blur', () => {
    if(pconfirm.value != password.value){
        pconfirm.setCustomValidity('Passwords do not match');
    }
    else if(pconfirm.value.trimStart() == ""){
        pconfirm.setCustomValidity('You must enter a password');
    }
    else{
        pconfirm.setCustomValidity('');
    }

    confirmError.textContent = pconfirm.validationMessage; 
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
});