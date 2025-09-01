let promise = new Promise((resolve, reject) => {
    let success = true;
    // let success = false;

    setTimeout(() => {
        if (success) {
            console.log("success");
            resolve(10);
        } else {
            console.log("failed");
            reject(-1);
        }
    }, 0);
});

promise
    .then((message) => {
        console.log("1st then", message);
        return 20;
    })
    .then((message) => {
        console.log("2nd then", message);
        return 30;
    })
    .then((message) => {
        console.log("3rd them ", message);
    })
    .catch((error) => {
        console.log("error", error);
    })
    .finally((message) => {
        console.log("me to chalunga hi pakka");
    });