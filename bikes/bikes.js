var Bike = /** @class */ (function () {
    function Bike(price, max_speed) {
        this.price = price;
        this.max_speed = max_speed;
        this.price = price;
        this.max_speed = max_speed;
        this.miles = 0;
    }
    Bike.prototype.displayInfo = function () {
        console.log("Price: " + this.price + "\nMax Speed: " + this.max_speed + "mph\nMiles: " + this.miles);
    };
    Bike.prototype.ride = function () {
        console.log("Riding");
        this.miles += 10;
        return this;
    };
    Bike.prototype.reverse = function () {
        if (this.miles >= 5) {
            console.log("Reversing");
            this.miles -= 5;
        }
        else {
            console.log('Cannot Reverse Any Further');
        }
        return this;
    };
    return Bike;
}());
var blueBike = new Bike(1200, 60);
blueBike.ride().ride().ride().reverse().displayInfo();
var redBike = new Bike(300, 35);
redBike.ride().ride().reverse().reverse().displayInfo();
var greenBike = new Bike(342, 45);
greenBike.reverse().reverse().reverse().displayInfo();
