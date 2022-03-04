class Ship {
    constructor(shipName, startingPt, location, noOfPassengers) {
        this.shipName = shipName
        this.startingPt = startingPt
        this.location = location
        this.noOfPassengers = noOfPassengers

    }
    setSail() {
        if (this.startingPt != this.location) {
            return false
        }
    }
    dock(portName) {
        this.location = portName
    }
};


module.exports = { Ship };
