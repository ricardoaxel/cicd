// console.log(global);

// function regularFunction() {
//   console.log(this); // Global object or `undefined`.
// }

// regularFunction();

// const arrowFunction = () => {
//   console.log(this); // Inherits from enclosing scope.
// };

// arrowFunction();

this.value = "3232";

class Example {
  value = 232323;

  constructor() {
    this.value = 42;
  }

  method() {
    console.log(this.value); // 42
  }

  static staticMethod() {
    console.log(this.value); // Refers to the class itself.
  }
}

const ex = new Example();

Example.staticMethod();
