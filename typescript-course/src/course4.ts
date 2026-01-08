
// Type Aliases in TypeScript

// const john: { id: number; name: string; isActive: boolean } = {
//   id: 1,
//   name: 'john',
//   isActive: true,
// };
// const susan: { id: number; name: string; isActive: boolean } = {
//   id: 1,
//   name: 'susan',
//   isActive: false,
// };

// function createUser(user: { id: number; name: string; isActive: boolean }): {
//   id: number;
//   name: string;
//   isActive: boolean;
// } {
//   console.log(`Hello there ${user.name.toUpperCase()} !!!`);

//   return user;
// }


type User = { id: number; name: string; isActive: boolean };

const john: User = {
  id: 1,
  name: 'john',
  isActive: true,
};
const susan: User = {
  id: 1,
  name: 'susan',
  isActive: false,
};

function createUser(user: User): User {
  console.log(`Hello there ${user.name.toUpperCase()} !!!`);
  return user;
}

type StringOrNumber = string | number; // Type alias for string | number

let value: StringOrNumber;
value = 'hello'; // This is valid
value = 123; // This is also valid

type Theme = 'light' | 'dark'; // Type alias for theme

let theme: Theme;
theme = 'light'; // This is valid
theme = 'dark'; // This is also valid

// Function that accepts the Theme type alias
function setTheme(t: Theme) {
  theme = t;
}

setTheme('dark'); // This will set the theme to 'dark'


type Employee = {id:number , name : "string" , employee :["john,susan,anna"]}

type Manager = {id:number , name : "string" , employee:["john,susan,anna"]}

type Staff = Employee | Manager

const printStaffDetails = (staff : Staff):void => {
 if("employee" in staff){
   console.log(`The person is a manager ${staff.employee.length}`);
 }
}

console.log(printStaffDetails("john"))