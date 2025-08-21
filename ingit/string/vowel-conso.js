let str = "this are vowel and consonant"
let s = str.split("")
let vowels = ""
let consonants = ""
for (let i = 0; i <= str.length - 1; i++) {
    if (s[i] == "a" || s[i] == "e" || s[i] == "i" || s[i] == "o" || s[i] == "u") {
        vowels = vowels + s[i] + ","
    } else {
        consonants = consonants + s[i] + ","
    }
}
console.log(vowels, "-> this are vowels present in paragraph");
console.log(consonants, "-> this are consonants present in paragraph");