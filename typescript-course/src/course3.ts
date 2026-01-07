// Functions in TypeScript

function HelloWorld(name:string){
    console.log( `my name is ${name.toUpperCase()}`)
}
HelloWorld("Maliki Timi")
// HelloWorld(2) // TypeScript error

// Challenge
// Create a new array of names.
// Write a new function that checks if a name is in your array. This function should take a name as a parameter and return a boolean.
// Use this function to check if various names are in your array and log the results.

let listOfNames: string[] = ["Alice", "Bob", "Charlie", "Diana"]

function isNamesInTheArray(name:string):boolean{
    if(listOfNames.includes(name)){
        return true
    }
    return false
}

let result = isNamesInTheArray("Bob")
console.log(result)


let result2 = isNamesInTheArray("Eve")
console.log(result2)

let result3 = isNamesInTheArray("Alice")

console.log(result3)

function calculateSum  (a:number, b?:number) :number {
   return a-(b || 0 )
}

 let minus = calculateSum(10)
    console.log(minus)