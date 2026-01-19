  // Type Annotations in TypeScript

let myName: string  = "maliki"

myName = "timi"
myName = myName.toLocaleUpperCase()

console.log(myName)

let myAge: number = 27

myAge += 1

console.log(myAge)

let canVote: boolean = true
canVote = !canVote



// Type Inference in TypeScript

let lastName = "Maliki"

lastName = lastName.split("").reverse().join("")

console.log(lastName)


// Challenge

// Create a variable of type string and try to invoke a string method on it.
// Create a variable of type number and try to perform a mathematical operation on it.
// Create a variable of type boolean and try to perform a logical operation on it.
// Try to assign a value of a different type to each of these variables and observe the TypeScript compiler's response.
// You can use type annotation or inference

let stringValue : string = "Hello, TypeScript!"

stringValue = stringValue.concat(" Let's learn TypeScript.")

console.log(stringValue)

let numberValue : number = 42

numberValue *= 5

console.log(numberValue)

let driverLicensed : boolean = true
driverLicensed = !driverLicensed

console.log(driverLicensed)



// Unions types in TypeScript

 let tax : number | string = 10

 tax = "Ten percent"

console.log(tax)

let serverRequest : "pending" | "success" | "error" = "pending"

serverRequest = "success"

console.log(serverRequest)


// Any type in TypeScript

let randomValue: any = 10
randomValue = randomValue = true
randomValue = randomValue = "random"

// Challenge

// Create a variable orderStatus of type 'processing' | 'shipped' | 'delivered' and assign it the value 'processing'. Then, try to assign it the values 'shipped' and 'delivered'.
// Create a variable discount of type number | string and assign it the value 20. Then, try to assign it the value '20%'

let orderStatus : "processing" | "shipped" | "delivered" = "processing"
 orderStatus = "shipped"

 let discount : number | string = 20
 discount = "20%"