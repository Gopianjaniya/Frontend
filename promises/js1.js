let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("success");
        resolve("success")
            // reject("failed");
    }, 5000);
});