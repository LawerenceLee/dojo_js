class Bike {
    miles: number;
    constructor(public price: number, public max_speed: number) {
        this.price = price;
        this.max_speed = max_speed;
        this.miles = 0;
    }

    displayInfo() {
        console.log(`Price: ${this.price}\nMax Speed: ${this.max_speed}mph\nMiles: ${this.miles}`)
    }

    ride() {
        console.log("Riding")
        this.miles += 10;
        return this
    }

    reverse() {
        if (this.miles >= 5) {
            console.log("Reversing")
            this.miles -= 5;
        }
        else {
            console.log('Cannot Reverse Any Further')
        }
        return this
    }
}

const blueBike = new Bike(1200, 60)
blueBike.ride().ride().ride().reverse().displayInfo()
const redBike = new Bike(300, 35);
redBike.ride().ride().reverse().reverse().displayInfo()
const greenBike = new Bike(342, 45)
greenBike.reverse().reverse().reverse().displayInfo()