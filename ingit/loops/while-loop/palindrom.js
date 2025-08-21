let num = 212,
    rev = 0,
    oN = num

while (num > 0) {
    let d = num % 10 //212%10 =2 //21%10=1 //2%10=
    rev = rev * 10 + d //0*10+2=2 //2*10+1=21
    num = num / 10 //212/10=21 //21/10=2


}
if (oN == rev) {
    console.log("palindrom number");
} else {
    console.log("not palindrom number");

}