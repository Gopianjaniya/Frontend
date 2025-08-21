let form = document.getElementById("form");
let userfile = document.getElementById("file");
let usercheckbox = document.getElementById("checkbox");



form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (userfile.value == "" && usercheckbox.checked == false) {
        alert("please fill are both")

    } else if (userfile.value == "") {
        // fileerror.innerText = "Please choose file";
        alert("please choose file")
    } else if (usercheckbox.checked == false) {
        alert("please fill check-box")
    } else {
        console.log(usercheckbox.value);
    }

});