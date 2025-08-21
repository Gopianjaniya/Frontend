class Animal {
    sound(cow) {
        console.log(" sound", cow);
    }
    sound(cow, eat) {
        console.log("sound", cow, "eat", eat);
    }
    sound() {
        console.log("dog sound", );
    }
}
const animal = new Animal()
    // animal.sound();
animal.sound("cow", "chara");

// -- MethodOverLoading does not supporin js