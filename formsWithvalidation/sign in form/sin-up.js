let form = document.getElementById("form")
let username = document.getElementById("username")
let useremail = document.getElementById("email")
let userpassword = document.getElementById("password")
let usermobile = document.getElementById("mobile")
    //  for errors =========
let username_error = document.getElementById("fill-username");
let useremail_error = document.getElementById("fill-email");
let userpassword_error = document.getElementById("fill-password");
let usermobile_error = document.getElementById("fill-mobile");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (username.value == "") {
        username_error.innerText = "User name not required";
    }
    if (useremail.value == "") {
        useremail_error.innerText = "email not required";

    }
    if (userpassword.value == "") {
        userpassword_error.innerText = "password not required";
    }
    if (usermobile.value == "") {
        usermobile_error.innerText = "Contact no. not required";
    }


})