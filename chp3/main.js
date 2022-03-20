//Day of the week program
// let dayInput = prompt('Enter a day of the week').toLowerCase()
// switch(dayInput){
//     case "monday":
//         console.log("Tuesday")
//         break
//     case "tuesday":
//         console.log("Wednesday")
//         break
//     case "wednesday":
//         console.log("Thursday")
//         break
//     case "thursday":
//             console.log("Friday")
//             break
//     case "friday":
//         console.log("Saturday")
//         break
//     case "saturday":
//         console.log("Sunday")
//         break
//     case "sunday":
//         console.log("Monday")
//         break
//     default:
//         console.log("Not a valid day of the week")
// }

//Number Comparison Program
// let num1 = Number(prompt('Enter 1 number'))
// let num2 = Number(prompt('Enter a second number'))

// if(num1 === num2){
//     console.log("This is the same number!") 
// }
// else{
//     console.log('This is not the same number!')
// }

//Following Second Program
let hours = Number(prompt('enter the hour'))
let minutes = Number(prompt('enter the minute'))
let seconds = Number(prompt('enter the second'))

if(seconds === 59){
    minutes += 1
    seconds = 0
}
if(minutes === 59){
    hours += 1
    minutes = 0
}
if(hours >=23){
    hours = 0
    minutes = 0
    seconds = 0
}
console.log(`The time is ${hours}h${minutes}m${seconds+1}s`)