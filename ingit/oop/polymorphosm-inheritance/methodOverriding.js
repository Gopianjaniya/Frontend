class Animal {
    sound() {
        console.log("Animal sound");

    }
}
class human extends Animal {
    sound() {
        super.sound()
        console.log("Human sound");

    }

}
const s = new human()
s.sound()