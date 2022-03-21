// TODO: create the character object here
let aurora = {
    name: "Aurora",
    class: 'Ranger',
    health: 40,
    strength: 10,
    xp: 0,

    describe(){
        return `${this.name} is a ${this.class} with ${this.health} health, ${this.strength} strength, and ${this.xp} experience points`;
    }
}

// Aurora is harmed by an arrow
aurora.health -= 20;

// Aurora equips a strength necklace
aurora.strength += 10;

// Aurora learn a new skill
aurora.xp += 15;

console.log(aurora.describe());