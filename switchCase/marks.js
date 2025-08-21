let a = 99;

switch (true) {
    case a <= 33:
        console.log("fail");
        break;
    case a <= 50:
        console.log("C");
        break;
    case a <= 70:
        console.log("B");
        break;
    case a <= 80:
        console.log("B+");
        break;
    case a <= 90:
        console.log("A");
        break;
    case a <= 100:
        console.log("A++");
        break;
    default:
        console.log("please enter number under 100")
        break;
}