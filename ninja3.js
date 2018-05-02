class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {console.log(`My ninja name is ${this.name}`)};

    showStats() {
        console.log(`
        Name: ${this.name} 
        Health: ${this.health}
        Speed: ${this.speed}
        Strength: ${this.strength}
        `);
    };

    drinkSake() {
        this.health += 10;
        return this;
    };

    punch(otherNinja) {
        if (otherNinja instanceof Ninja) {
            otherNinja.health -= 5;
            console.log(`${otherNinja.name} was punched by ${this.name} and lost 5 health!`)
        }
        else {console.log("Must pass an instance of Ninja")}

        return this
    }

    kick(otherNinja) {
        if (otherNinja instanceof Ninja) {
            let damage = 15 * this.strength; 
            otherNinja.health -= damage;
            console.log(`${otherNinja.name} was kicked by ${this.name} and lost ${damage} health!`)
            }
        else {console.log("Must pass an instance of Ninja")}

        return this
    }
}


class Sensei extends Ninja {
    constructor(name) {
        super(name)
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
    }

    speakWisdom() {
        console.log("What one programmer can do in one month, two programmers can do in two months.")
        this.drinkSake()
        return this
    }
}

// var ninja1 = new Ninja("Hyabusa");
// ninja1.sayName();
// ninja1.drinkSake();
// ninja1.showStats();
// -> "Name: Hayabusa, Health: 100, Speed: 3, Strength: 3"

// var blueNinja = new Ninja("Goemon");
// var redNinja = new Ninja("Bill Gates");
// redNinja.punch(blueNinja);

// blueNinja.kick(redNinja);

// let ninja = {name: "Ni"};
// blueNinja.kick(ninja)

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"