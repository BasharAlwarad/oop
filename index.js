/*
Encapsulation
Abstraction  
Inheritance  
Polymorphism 
*/

//>>>>>>>>> Object Literal & Encapsulation
const fName = 'John';
const lName = 'Doe';
const age = 20;
const getFullName = () => `${fName} ${lName}`;
console.log(getFullName());

const person0 = {
  fName: 'John',
  lName: 'Doe',
  age: 20,
  getFullName: () => `${person0['fName']} ${person0.lName}`,
};
console.log(person0);
console.log(person0.fName);
console.log(person0['lName']);
console.log(person0.getFullName());

const person0Func = function (fName, lName, age) {
  return {
    getFullName: function () {
      return `${fName} ${lName}`;
    },
    getNameAndAge: function () {
      return `${fName} ${lName} ${age}`;
    },
  };
};

console.log(person0Func('John', 'Doe').getFullName());
console.log(person0Func('John', 'Doe').getNameAndAge());

/*
Encapsulation: 
allows data and methods to be bundled together in an object.
organizing and protecting the internal workings of an object.
ensuring that its state and behavior are accessed and modified only through well-defined interfaces.
*/

//>>>>>>>>> Object with keyword
const person1 = new Object();
person1['fName'] = 'John';
person1.lName = 'Doe';
person1.getFullName = function () {
  return `${person1['fName']} ${person1['lName']}`;
};

// console.log(person1);

//>>>>>>>>> What is THIS
// this.location.replace('https://www.google.com');
// this.location.reload();
// this.open('http://localhost:3000');
const student0 = {
  fName: 'John',
  lName: 'Doe',
  age: 20,
  getFullName: function () {
    return `${this.fName} ${this.lName}`;
  },
  // getFullName: function () {
  //   return `${student0.fName} ${student0.lName}`;
  // },
};
const student1 = { ...student0 };
student1.fName = 'Karl';
console.log(student1.getFullName());

const regular = function () {
  console.log(this);
};
const arrow = () => {
  console.log(this);
};
const objFunc = {
  label: 'I am an Object',
  regular,
  arrow,
};

// objFunc.regular();
// objFunc.arrow();
// There is much more to the "this" keyword read about
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
// and https://javascript.info/object-methods#method-invocation-context
// and try to learn more about call() apply() bind()
// */

//>>>>>>>>> Constructor functions
function Creature(head, body, limbs) {
  this.head = head;
  this.body = body;
  this.limbs = limbs;
  this.describe = function () {
    return `head: ${this.head}, body: ${this.body}, limbs: ${this.limbs}`;
  };
}

const fish = new Creature(
  'fixed',
  'slender and horizontal',
  'between 4 to 8 fins'
);
const birds = new Creature(
  'flexible',
  'light covered with feathers',
  'two wings and two claws'
);
// console.log(fish.describe());
// console.log(birds instanceof Creature);
// console.log(birds.describe());
// console.log(Creature.prototype);

//>>>>>>>>> Prototypes
Creature.prototype.name = 'chicken';
Creature.prototype.canFly = function () {
  if (this.name === 'chicken') {
    return `${this.name} can not fly!`;
  }
};
// console.log(birds);
// console.log(Creature.prototype);

// console.log(birds.canFly());
// console.log(Creature.prototype.constructor);

Object.prototype.customLog = function () {
  console.log(this);
};
const a = 1;
// a.customLog();

// console.log(Array.constructor);
// console.log(Array.prototype);

const arr2 = [1, 2, 3, 4, 5, 6];
arr2.push(7);
// console.log(arr2.constructor);
// console.log(Array.prototype)
Array.prototype.push = function () {
  this.reverse();
};
arr2.push(10);
// console.log(arr2);

Array.prototype.basharCustomFunc = function (x) {
  this.shift();
  this.pop();
  this.reverse();
  this.push(x + 1);
};
arr2.basharCustomFunc(7);
arr2.push(1);
// console.log(arr2);
// console.log(Function.prototype);

//>>>>>>>>> Abstraction & Inherited
/*
Abstraction:
allows to represent complex systems in a simplified manner.
provides a way to create abstract models that can be easily used.
In JavaScript, abstraction can be achieved using classes and inheritance.
*/

/*
Inheritance:
allows objects to acquire properties and methods from a parent or base class.
promotes code reuse, modularity, and the ability to create specialized classes 
*/
const mammals = new Creature('it depends!', 'it depends!', 'it depends!');
// console.log(mammals.describe());

function Mammals(head, body, limbs, environment) {
  Creature.call(this, head, body, limbs);
  this.environment = environment;

  this.describe = function () {
    return `environment: ${this.environment} head: ${this.head}, body: ${this.body}, limbs: ${this.limbs}`;
  };
}

const whale = new Mammals('huge', 'large', 'fins', 'water');
// console.log(whale.describe());

//>>>>>>>>> Constructor classes & Polymorphism
/*
Polymorphism:
allows objects of different classes to be treated as interchangeable, based on a common interface.
*/
class Shape {
  calculateArea() {}
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }
}

const rectangle = new Rectangle(4, 5);
const circle = new Circle(3);

console.log(rectangle.calculateArea());
console.log(circle.calculateArea());

//>>>>>>>>> Static Properties and Methods

class Shape2 {
  constructor(x, y, z) {
    Object.assign(this, { x, y, z });
  }
  describe() {
    return `Shape: long: ${this.x}, width: ${this.y},height: ${this.z}`;
  }
  static sayHello() {
    console.log('hello');
  }
}

Shape2.sayHello();
const shape = new Shape2('1', '2', '3');
console.log(shape.describe());

//>>>>>>>>> Javascript Accessors Getters & Setters
/*
 getters and setters:
 allow to define the behavior for accessing and modifying object properties.
 provide a way to control the reading and writing of object data and enable encapsulation.
*/
class Student {
  #tel;
  constructor(fName, lName, tel) {
    Object.assign(this, { fName, lName });
    this.#tel = tel;
  }
  get fullName() {
    return `${this.fName} ${this.lName}`;
  }
  set fullName(value) {
    const [fName, lName] = value.split(' ');
    this.fName = fName;
    this.lName = lName;
  }
}

const student = new Student('John', 'Doe', 123);
student.fName = 'Jane';
student['#tel'] = 456;
console.log(student);
// console.log(student.fullName());
student.fullName = 'Jane Dwo';
console.log(student.fullName);

//>>>>>>>>> Important Notes
// 1- Object.assign() is a shallow copy, static method, and mutable
// 2- Object.create() is a deep copy, instance method, and immutable
// 3- Object.setPrototypeOf() is a deep copy, instance method, and mutable
// 4- Object.defineProperty() is a deep copy, instance method, and mutable
// Arrow functions do not have prototype property.
// Arrow functions do not have their own this. The value of this inside an arrow function remains the same throughout the lifecycle of the function and is always bound to the value of this in the closest non-arrow parent function.
// Arrow functions cannot be used as constructors and will throw an error when used with new.
// Arrow functions cannot be used as methods on objects. They cannot be used as object properties.
// Arrow functions cannot be used as generators.
// const f = function(){} === f(){} !== const f = ()=>{}
