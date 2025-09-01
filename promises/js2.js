let promise = new Promise((resolve, reject) => {
    let success = true;
    // let success = false;
    if (success) {
        console.log(success, "success");
        resolve("resolved-success")
    } else {
        console.log("faild");
        reject("reject-error")

    }
});
promise.then((message) => {
    console.log("then in success", message);

}).catch((error) => {
    console.log("catch error", error);
})