function validarEmail(){
    let email = document.querySelector('#email');
    let error = document.querySelector('#error-email');
    let success = document.querySelector('#success-email');
    if(!email.checkValidity()){
        success.innerHTML = "";
        error.innerHTML = "Please enter a valid email address";
        setTimeout(()=>{
            error.innerHTML = ""
        },1500);
    } else if (email.checkValidity()) {
        success.innerHTML = "Thank you! Sign up successful!";
        error.innerHTML = "";
        setTimeout(()=>{
            success.innerHTML = ""
        },1500);
    }
  }