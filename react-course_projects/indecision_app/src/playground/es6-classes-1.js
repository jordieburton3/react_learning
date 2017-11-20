class Person {
    constructor(name = "Anonymous", age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hi, I am ${this.name}!`;
    }

    getDescription() {
        return `${this.name} is ${this.age} years old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    getDescription() {
        let description = super.getDescription();
        if (this.hasMajor()) {
            description +=  ` Their major is ${this.major}`
        }
        return description;
    }

    hasMajor() {
        return !!this.major;
    }
}

class Traveler extends Person {
    constructor(name, age, home) {
        super(name, age);
        this.home = home;
    }

    getGreeting() {
        let greeting = `Hi, I am ${this.name}!`;
        if (this.home) {
            greeting += ` I am visiting from ${this.home}`
        }
        return greeting;
    }
}

const me = new Traveler("Jordan Burton", 21, "Warwick, New York");
console.log(me);

console.log(me.getDescription());

console.log(me.getGreeting());

const other = new Traveler();
console.log(other);

console.log(other.getDescription());

console.log(other.getGreeting());