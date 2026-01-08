
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


// type Employee = {id:number , name : "string" , employee :["john,susan,anna"]}

// type Manager = {id:number , name : "string" , employee:["john,susan,anna"]}

// type Staff = Employee | Manager

// const printStaffDetails = (staff : Staff):void => {
//  if("employee" in staff){
//    console.log(`The person is a manager ${staff.employee.length}`);
//  }
// }

// console.log(printStaffDetails("john"))


type Employee = { id: number; name: string; department: string };
type Manager = { id: number; name: string; employees: Employee[] };

type Staff = Employee | Manager;

function printStaffDetails(staff: Staff) {
  if ('employees' in staff) {
    console.log(
      `${staff.name} is a manager of ${staff.employees.length} employees.`
    );
  } else {
    console.log(
      `${staff.name} is an employee in the ${staff.department} department.`
    );
  }
}

const alice: Employee = { id: 1, name: 'Alice', department: 'Sales' };
const steve: Employee = { id: 1, name: 'Steve', department: 'HR' };
const bob: Manager = { id: 2, name: 'Bob', employees: [alice, steve] };

printStaffDetails(alice); // Outputs: Alice is an employee in the Sales department.
printStaffDetails(bob);