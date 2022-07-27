// Exercise 1
// Use a map method which will return 3 if the current number is less than 3, or the current number if 3 or more
// so the function you give your map will need to include an if statement in there, and return a differetn thing based on 
// how the if pans out
let ex1Arr = [1,2,3,4,5]
let min3 = ex1Arr.map((number) => { //we're calling our element 'number' because that makes sense to our human brain
  if (number < 3) {
    return 3 // if the number we're looking at currently is less than 3, we return 3
  } else {
    return number // if the number we're looking at currently is not less than 3, we return the number
  }
})
console.log(min3) // expect [3,3,3,4,5]

// Exercise 2
// Use a map to take a name and make an object with a key of name and the value of name being the string
let ex2Arr = ['Jared', 'Taylor', 'Johnny']
let objects = ex2Arr.map((string) => {
  return { name: string } // we are making an object with a key of name, and a value of whatever string we are currently 
  // looking at, and we are returning that object
})
console.log(objects) // expect [{name: 'Jared'}, {name: 'Taylor'}, {name: 'Johnny'}] 


// Exercise 3
// Use a .find to return the first element in this array which has the value of 'orange' in the color key
let ex3Arr = [
  {
    name: 'Jared',
    color: 'yellow'
  },
  {
    name: 'Taylor',
    color: 'orange'
  },
  {
    name: 'Johnny',
    color: 'orange'
  }
]

let orange = ex3Arr.find((obj) => {return obj.color === 'orange' }) // your code goes in the brackets here

console.log(orange) // expect { name: 'Taylor', colour: 'orange'}