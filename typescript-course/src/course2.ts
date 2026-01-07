// ARRAY TYPES IN TYPESCRIPT

let items: string[] = ["bottle water", "perfumes", "broom"]
items.push("detergent")

let numbers: number[] = [10, 20, 30, 40]

// Challenge
// Create an array temperatures of type number[] and assign it some values. Then, try to add a string value to it.
// Create an array colors of type string[] and assign it some values. Then, try to add a boolean value to it.
// Create an array mixedArray of type (number | string)[] and assign it some values. Then, try to add a boolean value to it.



let temperatures: number[] = [72, 85, 90, 78]

// temperatures.push("hot") //  TypeScript error

let colors:string[] = ["red", "blue", "green"]
// colors.push(true) // TypeScript error

let mixedArray:(number|string)[] = [1, "two", 3, "four"]
// mixedArray.push(false) // TypeScript error


// OBJECT TYPES IN TYPESCRIPT

let job :{ title:string, salary:number, yearsExperience:number, jobNature:"remote" | "onsite" | "hybrid", isAuthorized:boolean} = {
    title: "Software Developer",
    salary: 75000,
    yearsExperience: 3,
    jobNature: "remote",
    isAuthorized: true
}

job.salary += 5000


let laptop : {brand:string, amount:number, year:number} = {brand:"Hp laptop", amount:320000, year:2026}
laptop.brand = "Dell laptop"

let book = {title:"The Alchemist", author:"Paulo Coelho", isPublished:true}
let artGallery  = {title:"Modern Art Gallery", author:"John Smith"}

let products : {title:string, author:string}[] = [book, artGallery]

let result = products.push({title:"The Great Gatsby", author:"F. Scott Fitzgerald"})
console.log(result)

// Challenge
// Create an object student with properties name (string), age (number), isEnrolled (boolean), and courses (string[]). Assign appropriate values to each property.
// Create an object car with properties make (string), model (string), year (number), and isElectric (boolean). Assign appropriate values to each property.
// Create an array employees of type { name: string; position: string; salary: number; }[] and add a few employee objects to it.