function reverse_word(str) {
    str = str.split(".")
    let len = str.length

    let newStr = ""

    for (let i = len - 1; i >= 0; i--) {

        newStr = newStr + str[i]
        if (i > 0) {
            newStr += ".";
        }
        // if (newStr[0] == "." || newStr[newStr.length] == ".") {
        //     newStr = newStr = " ";
        // }

    }
    return newStr

}
// let str = "i.like.this.program.very.much"
let str = ".i.like.this.program.very.much.";
console.log(reverse_word(str));