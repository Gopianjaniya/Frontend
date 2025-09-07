let addBtn = document.querySelectorAll(".addBtn");
let cartPush = document.getElementById("added-carts");

addBtn.forEach((btn) => {

    btn.addEventListener("click", (e) => {
        e.preventDefault();
        // cart ke sabhi div de dega
        let cart = e.target.closest(".cart");



        let price = cart.querySelector(".price").innerHTML;
        let desc = cart.querySelector(".desc").innerHTML;
        let img = cart.querySelector(".image img");

        let ul = document.createElement("ul");
        ul.classList.add("cartJs");
        ul.innerHTML = `<img src="${img.src}" alt="photo"/>
                        <hr/>
                       <h3>₨ ${price}</h3>
                       <p>${desc}</p>
                       <button class="remove" onclick="remove()">X</button>`;
        // let store = ul.innerText;
        // console.log(store);

        // let repo = localStorage.setItem("product", JSON.stringify(store));
        // console.log(repo);

        cartPush.appendChild(ul);

        let remove = ul.querySelector(".remove")
            // console.log(remove);


        remove.addEventListener('click', () => {
            ul.remove();
        })
    });
});