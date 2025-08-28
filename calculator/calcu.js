let enterNum = document.getElementById("enterNum");



function calculate(value) {
    switch (value) {
        case "1":
            enterNum.value = enterNum.value + value;
            console.log(enterNum.value);
            break;
        case "2":
            enterNum.value = enterNum.value + value;
            console.log(enterNum.value);
            break;
        case "3":
            enterNum.value = enterNum.value + value;
            console.log(enterNum.value);
            break;
        case "4":
            enterNum.value = enterNum.value + value;
            console.log(enterNum.value);
            break;
        case "5":
            enterNum.value = enterNum.value + value;
            console.log(enterNum.value);
            break;
        case "6":
            enterNum.value = enterNum.value + value;
            console.log(enterNum.value);
            break;
        case "7":
            enterNum.value = enterNum.value + value;
            console.log(enterNum.value);
            break;
        case "8":
            enterNum.value = enterNum.value + value;
            console.log(enterNum.value);
            break;
        case "9":
            enterNum.value = enterNum.value + value;
            console.log(enterNum.value);
            break;
        case "0":
            enterNum.value = enterNum.value + value;
            console.log(enterNum.value);
            break;
        case "00":
            enterNum.value = enterNum.value + value;
            console.log(enterNum.value);
            break;
        case "+":
            enterNum.value = enterNum.value + value;
            console.log(enterNum.value);
            break;
        case "-":
            enterNum.value = enterNum.value + value;
            console.log(enterNum.value);
            break;
        case "*":
            enterNum.value = enterNum.value + value;
            console.log(enterNum.value);
            break;
        case "/":
            enterNum.value = enterNum.value + value;
            console.log(enterNum.value);
            break;
        case "%":
            enterNum.value = enterNum.value + value;
            console.log(enterNum.value);
            break;
        case ".":
            enterNum.value = enterNum.value + value;
            console.log(enterNum.value);
            break;
        case "c":
            enterNum.value = enterNum.value.slice(0, -1); // last element delete
            console.log(enterNum.value);
            break;
        case "":
            enterNum.value = enterNum.value + value;
            enterNum.value = "";
            console.log("clear" + enterNum.value);
            break;
        case "=":
            enterNum.value = eval(enterNum.value);
            console.log(enterNum.value);
            break;

        default:
            break;
    }
}