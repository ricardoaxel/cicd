class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, I'm ${this.name}, i've ${this.age}`);
  }
}

const axel = new Person("Axel", 12);
axel.greet();
