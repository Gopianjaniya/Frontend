function anagram(s, s2) {
    let len = s.length
    let found = false

    for (let i = 0; i <= len - 1; i++) {
        for (let j = 0; j <= len - 1; j++) {
            if (s[i] == s2[j] && s.length == s2.length) {
                found = true
                break;
            } else {
                found = false;
            }
        }
    }
    return found;
}
let s = "eat"
let s2 = "aet"

if (anagram(s, s2)) {
    console.log("This strings are anagram");
} else {
    console.log("This strings are not anagram");
}