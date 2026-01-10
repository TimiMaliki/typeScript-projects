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


// enum ServerResponseStatus {
//   Success = 200,
//   Error = 'Error',
// }

// interface ServerResponse {
//   result: ServerResponseStatus;
//   data: string[];
// }

// function getServerResponse(): ServerResponse {
//   return {
//     result: ServerResponseStatus.Success,
//     data: ['first item', 'second item'],
//   };
// }

// const response: ServerResponse = getServerResponse();
// console.log(response);