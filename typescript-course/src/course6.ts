// Type Guards in TypeScript

interface Person{
 name : string
}

interface DogOwner extends Person {
    dogName : string
}

interface Manager extends Person{
    managePeople():void,
    deleteTasks(): void
}


function getEmployee(): Person | DogOwner | Manager{
    const random = Math.random();
    if( random < 0.33){
       return {
        name : "john"
       }
    } else if( random < 0.66){
       return {
        name: "Rex"
       }
    } else {
        return {
            name:"Timi",
            managePeople(){
                console.log("managing people")
            },
            deleteTasks(){
                console.log("deleting tasks")
            }
        }
    }
}

const employee1 : Person | DogOwner | Manager = getEmployee()
console.log(employee1)


// Tuples in TypeScript

let tuple1:[string,number,string] = ["Timi" , 27, "Nigeria"]

let date:[number, number, number] = [2024, 6, 15]


// Enums in TypeScript


enum ServerResponseStatus {
  Success = 200,
  Error = 'Error',
}

interface ServerResponse {
  result: ServerResponseStatus;
  data: string[];
}

function getServerResponse(): ServerResponse {
  return {
    result: ServerResponseStatus.Success,
    data: ['first item', 'second item'],
  };
}

const response: ServerResponse = getServerResponse();
console.log(response);


// Challenge

enum  UserRole {
    ADMIN,
    Manager,
    Employee
}


type User = {
    id: number,
    name: string,
    role: UserRole,
    contact : [string, string]
}


function createUser(user:User):User{
   return {
     ...user
   }
}

const newUsers:User = createUser({
    id: 1,
    name: "Timi Maliki",
    role: UserRole.ADMIN,
    contact: ["Timi Maliki", "08034567890"]
})

console.log(newUsers)



// Type Assertions in TypeScript

let someValue: any = 'This is a string';

// Using type assertion to treat 'someValue' as a string
let strLength: number = (someValue as string).length;

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

type User2 = {
  name: string;
  status: Status;
};
// save Status.Pending in the DB as a string
// retrieve string from the DB
const statusValue = 'pending';

const user: User2 = { name: 'john', status: statusValue as Status };

