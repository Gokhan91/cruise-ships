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
};


module.exports = { Ship };
