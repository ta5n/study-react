interface Person {
  name: string;
  age: number;
}

class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
    console.log('test');
  }
  getGreeting() {
    return `Hi, I am ${this.name}!`;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

interface Student extends Person {
  major: string;
}

class Student extends Person {
  constructor(name: string, age: number, major: string) {
    super(name, age);
    this.major = major;
  }

  hasMajor() {
    return !!this.major;
  }

  getDescription() {
    let description = super.getDescription();
    if (this.hasMajor()) {
      description += `Their major is ${this.major}.`;
    }
    return description;
  }
}

interface Traveler extends Person {
  homeLocation: string;
}

class Traveler extends Person {
  constructor(name: string, age: number, homeLocation: string) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  getGreeting() {
    let greeting = super.getGreeting();
    if (this.homeLocation) {
      greeting += ` I am visiting from ${this.homeLocation}`;
    }
    return greeting;
  }
}

const me = new Traveler('Osman Taş', 42, 'Sakarya');
console.log(me.getGreeting());

/* const other = new Student();
console.log(other.getDescription());
 */
export default Person;
