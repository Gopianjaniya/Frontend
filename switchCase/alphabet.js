let char = "a"

switch (true) {
    case char == "a" ||
    char == "e" ||
    char == "i" ||
    char == "o" ||
    char == "u" ||
    char == "A" ||
    char == "E" ||
    char == "I" ||
    char == "O" ||
    char == "U":
        console.log(" This is vowel =>", char);
        break;
    case char >= 0:
        console.log("This is a positive number =>", char);
        break;
    case char <= 0:
        console.log("This is a nagative number => ", char);
        break;
    default:
        console.log("consonant=> ", char);
        break;
}