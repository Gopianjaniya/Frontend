let form = document.getElementById("form")
let useremail = document.getElementById("email");
let userpassword = document.getElementById("password");
//for errors =======
let emailerror = document.getElementById("fill-email")
let passworderror = document.getElementById("fill-password");

form.addEventListener("submit", (e) => {
    e.preventDefault();


    if (useremail.value == "") {
        emailerror.innerText = "Email doesn't match";
    }
    if (userpassword.value == "") {
        passworderror.innerText = "Password  doesn't match";
    }
})