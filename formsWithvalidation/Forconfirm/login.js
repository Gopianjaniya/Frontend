let form = document.getElementById("form")
let userpassword = document.getElementById("password");
let user_c_pass = document.getElementById("c-password");
//for errors =======
let passworderror = document.getElementById("fill-password");
let user_c_passerror = document.getElementById("fill-c-password");

form.addEventListener("submit", (e) => {
    e.preventDefault();


    if (userpassword.value == "") {
        passworderror.innerText = "please Enter password";
    }
    if (user_c_pass.value == "") {
        user_c_passerror.innerText = "please Enter password";
    }
    if (userpassword.value != user_c_pass.value) {
        user_c_passerror.innerText = "Password doesn't match";

    }
})