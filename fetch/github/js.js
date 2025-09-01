let users = document.getElementById("users");
let btn = document.getElementById("btn");
btn.addEventListener("click", async(event) => {

    try {
        let res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) {
            throw new Error("HTTP Error" + res.status);
        }
        let data = await res.json();

        let userDiv = document.getElementById("users");
        userDiv.innerHTML = ""; // previous content rempty

        data.forEach((user) => {
            let div = document.createElement("div");
            div.classList.add("user-css");
            div.innerHTML = `<h3>${user.name}</h3>
            <p><b>Id : </b>${user.id}</p>
        <p><b>Email : </b>${user.email}</p>
        <p><b>City : </b>${user.address.city}</p>
        `;
            userDiv.appendChild(div);
        });
    } catch (error) {
        console.log("Error :", error);
        users.classList.add("error");
        users.innerHTML = `<p>${error}❌🤔</p>`
    }

})