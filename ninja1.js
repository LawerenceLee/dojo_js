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
    }
    this.drinkSake = () => {this.health += 10};
}

var ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.drinkSake();
ninja1.showStats();
// -> "Name: Hayabusa, Health: 100, Speed: 3, Strength: 3"