 //  --------------------------------------------------------------------
 let baseUrl = "https://api.freeapi.app/api/v1";
 try {
     let regForm = document.getElementById("form");
     regForm.addEventListener("submit", (event) => {
         event.preventDefault();

         // get values in varialbes --------
         let success_sms = document.getElementById("success-message");
         let username = event.target.username.value;
         let email = event.target.email.value;
         let password = event.target.password.value;


         register({ username, email, password, role: "USER" }).then((data) => {
             if (data.statusCode == 200) {
                 success_sms.innerHTML = data.message;
                 console.log("✅ Success:", data);

                 setTimeout(() => {
                     window.location.href = `../login/login.html`;
                 }, 2000);
             } else {
                 success_sms.innerHTML = data.message || "Registration failed.";
                 console.log("⚠️ Error:", data);
             }
         }).catch((err) => {
             console.log(err);
         })

     })
 } catch (error) {
     console.log(error);

 }

 async function register(userData) {
     try {
         let url = `${baseUrl}/users/register`
         let repo = await fetch(url, {
             method: "POST",
             headers: { "Content-Type": "application/json" },
             body: JSON.stringify(userData),
         });
         let data = await repo.json();

         return data;

     } catch (error) {
         console.log(error.massage);


     }

 }