function validarEmail(){
    let email = document.querySelector('#email');
    let error = document.querySelector('#error-email');
    if(!email.checkValidity()){
      error.innerHTML = "Please enter a valid email address"
    }
  }