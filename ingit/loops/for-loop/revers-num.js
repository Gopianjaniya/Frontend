let num = 35734856874
let rev = 0
let ori = num

for (let i = 1; i <= num; i++) { //error condition
    let digit = num % 10 // last digit 
    rev = (rev * 10) + digit //last digit store
    num = Math.floor(num / 10);

}
console.log(rev);