// //Improved Hello
// // Say hello to the user
// function sayHello(firstName, lastName) {
//     const message = `Hello, ${firstName} ${lastName}!`;
//     return message;
//   }
  
//   // TODO: ask user for first and last name
//   let firstName = prompt("Enter a first name")
//   let lastName = prompt(`Enter a last name`)
//   // TODO: call sayHello() and show its result
// console.log(sayHello(firstName, lastName))


// Square the given number x
function square1(num1) {
    // TODO: complete the function code
    return(num1*num1)
  }
  
  // Square the given number x
  const square2 = square => square * square // TODO: complete the function code
  
  console.log(square1(0)); // Must show 0
  console.log(square1(2)); // Must show 4
  console.log(square1(5)); // Must show 25
  
  console.log(square2(0)); // Must show 0
  console.log(square2(2)); // Must show 4
  console.log(square2(5)); // Must show 25

  for(let i=0; i <10; i++){
      console.log(`The Square of ${i} is ${i*i}`)
  }

// TODO: write the min() function
let min = (num1, num2) => {
    if(num1 > num2) return(num2) 
    else return(num1)
}

console.log(min(4.5, 5)); // Must show 4.5
console.log(min(19, 9));  // Must show 9
console.log(min(1, 1));   // Must show 1  


// TODO: complete program
let calculate = (num1, operation, num2) => {
    switch(operation){
        case '+': 
            console.log(num1 + num2)
            break
        case '-':
            console.log(num1 - num2)
            break
        case '*':
            console.log(num1 * num2)
            break
        case '/':
            console.log(num1 / num2)
            break
    }
}

console.log(calculate(4, "+", 6));  // Must show 10
console.log(calculate(4, "-", 6));  // Must show -2
console.log(calculate(2, "*", 0));  // Must show 0
console.log(calculate(12, "/", 0)); // Must show Infinity