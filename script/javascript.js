function checkPasswords() {
    let passwordMatch = document.getElementById("password-match");
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;
    let button = document.getElementById("submit-button");
    let passwordInput = document.getElementById("password");
    let confirmPasswordInput = document.getElementById("confirm-password");
  
    if ( (password != confirmPassword ) || ( password || confirmPassword) === "") {
        passwordMatch.innerText = "Passwords doesn't match";
        passwordMatch.classList.remove("validPassword")
        passwordMatch.classList.add("invalidPassword")

        button.disabled = true
        
        passwordInput.classList.remove("green")
        passwordInput.classList.add("red")
        
        confirmPasswordInput.classList.remove("green")
        confirmPasswordInput.classList.add("red")
        
        button.classList.remove("validButton")
        button.classList.add("invalidButton")
  
    }else{
        passwordMatch.innerText = "Passwords match.";
        passwordMatch.classList.remove("invalidPassword")
        passwordMatch.classList.add("validPassword")
        button.disabled = false
  
        passwordInput.classList.remove("red")
        passwordInput.classList.add("green")
        
        confirmPasswordInput.classList.remove("red")
        confirmPasswordInput.classList.add("green")
        
        button.classList.remove("invalidButton")
        button.classList.add("validButton")
  
      }
    }
  