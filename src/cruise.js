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
    // dock(location)
    //this.location = location
};

class Port {
    constructor(portName) {
        this.portName = portName;
    };
};


module.exports = { Ship, Port };


