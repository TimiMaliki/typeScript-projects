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