class Ship {
    constructor(shipName, startingPort, noOfPassengers) {
        this.shipName = shipName
        this.startingPort = startingPort
        this.noOfPassengers = noOfPassengers
    }
    setSail() {
        this.startingPort = false;
    }


};
module.exports = Ship;


