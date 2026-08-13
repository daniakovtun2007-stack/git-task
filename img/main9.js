class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
        sayHello() {
        console.log(`Hello ${this._name}.`);
    }
}
const person = new Person("John", 30);
person.sayHello();

class Student extends Person {
    constructor(name, age, studentId) {
        super(name, age);
        this._studentId = studentId;
    }
    study() {
        console.log(`This student ${this._name} with student ID ${this._studentId} is studying.`);
    }
}
const student = new Student("Danya", 18, "S12345");
student.study();