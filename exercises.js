// .map()

// Returns a new array of the exact same length as the original
//Takes 1 parameter, which is a function that tells the map what to return for each element in the array.

// eg.
let arr = [1,2,3,4,5]

let newArr = arr.map((number) => { return number + 5}) // take each number and add 5 to it

console.log(newArr) // expect [6,7,8,9,10]

// Exercise 1
// Use a map method which will return 3 if the current number is less than 3, or the current number if 3 or more
// so the function you give your map will need to include an if statement in there, and return a differetn thing based on 
// how the if pans out
let ex1Arr = [1,2,3,4,5]
let min3 = ex1Arr.map() // your code goes in the brckets here
console.log(min3) // expect [3,3,3,4,5]

// Exercise 2
// Use a map to take a name and make an object with a key of name and the value of name being the string
let ex2Arr = ['Jared', 'Taylor', 'Johnny']
let objects = ex2Arr.map() //your code goes in the brackets here
console.log(objects) // expect [{name: 'Jared'}, {name: 'Taylor'}, {name: 'Johnny'}] 