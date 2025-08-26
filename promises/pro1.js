 console.log("first step");

 let promises = new Promise((resolve, reject) => {
     setTimeout(() => {
         let p = "success data"
         alert("go")
         resolve(p)
         console.log("second step");
         console.log(p);



     }, 2000)
 });
 console.log("third step");