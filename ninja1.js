function Ninja(name) {
    this.name = name;
    this.health = 100;
    let speed = 3;
    let strength = 3;

    this.sayName = () => {console.log(`My ninja name is ${this.name}`)};

    this.showStats = () => {
        console.log(`
        Name: ${this.name} 
        Health: ${this.health}
        Speed: ${speed}
        Strength: ${strength}
        `);
    };

    this.drinkSake = () => {
        this.health += 10;
        return this;
    };

    this.punch = otherNinja => {
        if (otherNinja instanceof Ninja) {
            otherNinja.health -= 5;
            console.log(`${otherNinja.name} was punched by ${this.name} and lost 5 health!`)
        }
        else {console.log("Must pass an instance of Ninja")}

        return this
    }

    this.kick = otherNinja => {
        if (otherNinja instanceof Ninja) {
            let damage = 15 * strength; 
            otherNinja.health -= damage;
            console.log(`${otherNinja.name} was kicked by ${this.name} and lost ${damage} health!`)
            }
        else {console.log("Must pass an instance of Ninja")}

        return this
    }
}

// var ninja1 = new Ninja("Hyabusa");
// ninja1.sayName();
// ninja1.drinkSake();
// ninja1.showStats();
// -> "Name: Hayabusa, Health: 100, Speed: 3, Strength: 3"

var blueNinja = new Ninja("Goemon");
var redNinja = new Ninja("Bill Gates");
redNinja.punch(blueNinja);

blueNinja.kick(redNinja);

let ninja = {name: "Ni"};
blueNinja.kick(ninja)