// Type Assertion in typescript

let someValue: any = 'This is a string';

// Using type assertion to treat 'someValue' as a string
let strLength: number = (someValue as string).length;
console.log(strLength)

type Bird = {
  name: string;
};

// Assume we have a JSON string from an API or local file
let birdString = '{"name": "Eagle"}';
let dogString = '{"breed": "Poodle"}';

//

// Parse the JSON string into an object
let birdObject = JSON.parse(birdString);
let dogObject = JSON.parse(dogString);

// We're sure that the jsonObject is actually a Bird
let bird = birdObject as Bird;
let dog = dogObject as Bird;

console.log(bird.name);
console.log(dog.name);

enum Status {
  Pending = 'pending',
  Declined = 'declined',
}

type User = {
  name: string;
  status: Status;
};
// save Status.Pending in the DB as a string
// retrieve string from the DB
const statusValue = 'pending';

const user: User = { name: 'john', status: statusValue as Status };

// Type Unknown in TypeScript


let unknownValue: unknown;

// Assign different types of values to unknownValue
unknownValue = 'Hello World'; // OK
unknownValue = [1, 2, 3]; // OK
unknownValue = 42.3344556; // OK

// unknownValue.toFixed( ); // Error: Object is of type 'unknown'

// Now, let's try to use unknownValue
if (typeof unknownValue === 'number') {
  // TypeScript knows that unknownValue is a string in this block
  console.log(unknownValue.toFixed(2)); // OK
}

function runSomeCode() {
  const random = Math.random();
  if (random < 0.5) {
    throw new Error('Something went wrong');
  } else {
    throw 'some error';
  }
}

try {
  runSomeCode();
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  } else {
    console.log(error);
    console.log('there was an error....');
  }
}


// Never Type in TypeScript


// let someValue: never = 0;

type Theme = 'light' | 'dark';

function checkTheme(theme: Theme) {
  if (theme === 'light') {
    console.log('light theme');
    return;
  }
  if (theme === 'dark') {
    console.log('dark theme');
    return;
  }
  theme;
  // theme is of type never, because it can never have a value that is not 'light' or 'dark'.
}