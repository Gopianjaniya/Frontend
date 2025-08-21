class person {
    eat() {
        console.log("eat");
    }
    sleep() {
        console.log("sleep");
    }
    run() {
        console.log("run");
    }
    bike() {
        console.log("Person bike");
    }
}
class Engineer extends person {
    work() {
        console.log("something work");
    }
    office() {
        console.log("office");
    }
    bike() {
        super.bike();
        console.log("Engineer bike");
    }
}
const obj = new Engineer();
obj.work();
obj.eat();
obj.sleep();
obj.run();
obj.office();
obj.bike();