function validationform(event){
    event.preventDefault();

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    clearErrors();
    if(!emailRegex.test(email) && password.length < 6){
        displayError('email','Please enter a valid email address or phone number.');
        displayError('password','Your password must contain between 6 and 60 characters.');
        return false;
    }

    if(!emailRegex.test(email)){
        displayError('email','Please enter a vaild email address or phone number.');
        return false;
    }
    if(password.length<6){
        displayError('password','Your password must contain between 6 and 60 characters.');
        return false;
    }
    alert('Sign-up Successfull');
    console.log({email,password});
    document.getElementById('signupForm').reset();
    return true;
    
}

    function displayError(inputId, message) {
        if(email.value ==""){
        email.style.border="1px solid red";
        }
        if(password.value ==""){
        password.style.border="1px solid red";
        }
        var errorTag = document.getElementById(inputId + 'Error');
        errorTag.textContent = message;
        errorTag.style.display = 'block';
      }
      
      function clearErrors() {
        var errors = document.getElementsByClassName('error');
        for (var i = 0; i < errors.length; i++) {
          errors[i].style.display = 'none';
        }
    }


