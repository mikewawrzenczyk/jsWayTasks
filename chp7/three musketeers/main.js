/*Write a program that:

    Creates an array named musketeers containing values "Athos", "Porthos" and "Aramis".
    Shows each array element using a for loop.
    Adds the "D'Artagnan" value to the array.
    Shows each array element using the forEach() method.
    Remove poor Aramis.
    Shows each array element using a for-of loop.
    */

let muskateers = ["Athos", "Porthos", "Aramis"]

for(let i=0;i <= muskateers.length -1; i++)
    console.log(muskateers[i])

muskateers.push("D'Artagnan")

muskateers.forEach(element => console.log(element))

muskateers.splice(2,1)

for (const muskateer of muskateers) {
    console.log(muskateer);
  }

