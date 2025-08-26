 let emp1 = { id: 1, name: "ram", age: 22 }
 let e1 = JSON.stringify(emp1);
 sessionStorage.setItem("empinfo1", e1);

 let emp2 = { id: 2, name: "naman", age: 55 };
 let e2 = JSON.stringify(emp2);
 sessionStorage.setItem("empinfo2", e2);

 let emp3 = { id: 3, name: "divy", age: 66 };
 let e3 = JSON.stringify(emp3);
 sessionStorage.setItem("empinfo3", e3);

 //  sessionStorage.clear();

 let emp1Get = sessionStorage.getItem("empinfo1");
 console.log(emp1Get);
 let emp2Get = sessionStorage.getItem("empinfo2");
 console.log(emp2Get);
 let emp3Get = sessionStorage.getItem("empinfo3");
 console.log(emp3Get);