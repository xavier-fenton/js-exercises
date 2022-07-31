// .map()

// Returns a new array of the exact same length as the original
//Takes 1 parameter, which is a function that tells the map what to return for each element in the array.

// eg.
let arr = [1, 2, 3, 4, 5]

let newArr = arr.map((number) => {
  return number + 5
}) // take each number and add 5 to it

console.log(newArr) // expect [6,7,8,9,10]

// Exercise 1
// Use a map method which will return 3 if the current number is less than 3, or the current number if 3 or more
// so the function you give your map will need to include an if statement in there, and return a differetn thing based on
// how the if pans out
let ex1Arr = [1, 2, 3, 4, 5]
let min3 = ex1Arr.map((number) => {
  if (number <= 3) {
    number = 3
  } else number >= 3
  return number
}) // your code goes in the brckets here
console.log(min3) // expect [3,3,3,4,5]

// Exercise 2
// Use a map to take a name and make an object with a key of name and the value of name being the string
let ex2Arr = ['Jared', 'Taylor', 'Johnny']
let objects = ex2Arr.map((string) => {
  return { name: string }
}) //your code goes in the brackets here
console.log(objects) // expect [{name: 'Jared'}, {name: 'Taylor'}, {name: 'Johnny'}]

// .find()

// returns the first element in the array which satisfies the condition you tell it
// Takes 1 parameter, which is a function that returns a condition which will evaluate to true or false
// eg
let arr2 = [1, 2, 3, 4, 5]

let moreThanThree = arr2.find((number) => {
  return number > 3
}) //look at each number and if number > 3 is true,
//it will return that number, otherwise it moves on to the next number and tests that.

console.log(moreThanThree) // expect 4

// Exercise 3
// Use a .find to return the first element in this array which has the value of 'orange' in the color key
let ex3Arr = [
  {
    name: 'Jared',
    color: 'yellow',
  },
  {
    name: 'Taylor',
    color: 'orange',
  },
  {
    name: 'Johnny',
    color: 'orange',
  },
]

let orange = ex3Arr.find((color) => {
  return obj.color === 'orange'
}) // your code goes in the brackets here

console.log(orange) // expect { name: 'Taylor', colour: 'orange'}
