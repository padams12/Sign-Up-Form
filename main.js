let userPassword = document.querySelector("#userPassword"); //Select first password entered.
let userConfirmPassword = document.querySelector("#userConfirmPassword"); //Select second password entered (confirm element).
let userPasswordResult = document.querySelector("#passwordResult"); //Select password result element.

function confirmUserPassword() {

    userPasswordResult.innerText = userPassword.value == userConfirmPassword.value ? "Passwords match!" : "Passwords do not match!";

}

userPassword.addEventListener("keyup", ()=> {

    if(userConfirmPassword.value.length != 0) {

        confirmUserPassword(); //Run confirm password function.
    }


})

userConfirmPassword.addEventListener("keyup", confirmUserPassword); //Call confirm password method upon keyup event.