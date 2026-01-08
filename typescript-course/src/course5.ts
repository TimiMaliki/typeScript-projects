// Type InterFaces in TypeScript

// interface Book {
//   readonly isbn: number;
//   title: string;
//   author: string;
//   genre?: string;
//   printAuthor(): void;
// }

// const deepWork: Book = {
//   isbn: 9781455586691,
//   title: 'Deep Work',
//   author: 'Cal Newport',
//   genre: 'Self-help',
//     printAuthor() {
//         console.log(this.title, this.genre)
//     }
// };
// deepWork.printAuthor()
// deepWork.title = 'New Title'; // allowed
// deepWork.isbn = 654321; // not allowed

// Method

interface Book {
  readonly isbn: number;
  title: string;
  author: string;
  genre?: string;
  // method
  printAuthor(): void;
  printTitle(message: string): string;
}

const deepWork: Book = {
  isbn: 9781455586691,
  title: 'Deep Work',
  author: 'Cal Newport',
  genre: 'Self-help',
  printAuthor() {
    console.log(this.author);
  },
  printTitle(message) {
    return `${this.title} ${message}`;
  },
};
deepWork.printAuthor();
const result = deepWork.printTitle('is an awesome book');
console.log(result);


interface Computer{
    readonly id:number;
    brand:string;
    ram:number;
    storage?:string;
    upgradeRam(ramUpgrade:number):number
}


const dellLaptop : Computer = {
    id:1,
    brand:"Dell",
    ram:8,
    storage:"256GB",
    upgradeRam(ramUpgrade){
   this.ram += ramUpgrade;
   return this.ram;
    }
}

const dellResult = dellLaptop.upgradeRam(163);

console.log(dellResult)


//Interface - Merging, Extend, TypeGuard


interface Person {
  name: string;
  getDetails(): string;
}

interface DogOwner {
  dogName: string;
  getDogDetails(): string;
}

// Merging (reopening) an interface in TypeScript is a process where you declare an interface with the same name more than once, and TypeScript will merge their members.

// Merging the interface
interface Person {
  age: number;
}

// Usage
const person: Person = {
  name: 'John',
  age: 30,
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  },
};

// Extending an interface in TypeScript is a way to create a new interface that inherits the properties and methods of an existing interface. You use the extends keyword to do this. When you extend an interface, the new interface will have all the members of the base interface, plus any new members that you add.

// Extending the interface
interface Employee extends Person {
  employeeId: number;
}

const employee: Employee = {
  name: 'jane',
  age: 28,
  employeeId: 123,
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}, Employee ID: ${this.employeeId}`;
  },
};

// Interface multiple inheritance
interface Manager extends Person, DogOwner {
  managePeople(): void;
}

const manager: Manager = {
  name: 'Bob',
  age: 35,
  dogName: 'Rex',
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  },
  getDogDetails() {
    return `Dog Name: ${this.dogName}`;
  },
  managePeople() {
    console.log('Managing people...');
  },
};