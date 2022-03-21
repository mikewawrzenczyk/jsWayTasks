const r = Number(prompt("Enter the circle radius:"));

let circle = {
    radius: r,
    circumference(){
        return 2 * Math.PI * r
    },
    area(){
        return (Math.PI * Math.pow(r,2))
    }
}



// TODO: create the circle object here

console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);