function validarEmail(){
    let email = document.querySelector('#email');
    let error = document.querySelector('#error-email');
    let success = document.querySelector('#success-email');
    if(!email.checkValidity()){
        error.innerHTML = "Please enter a valid email address"
    } else if (email.checkValidity()) {
        success.innerHTML = "Thank you! Sign up successful!"
    }
  }