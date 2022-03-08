class Ship {
    constructor(shipName, currentpt, noOfPassengers) {
        this.shipName = shipName
        this.currentpt = currentpt
        this.noOfPassengers = noOfPassengers
        this.previousPort = null
    }
    setSail() {
        if (this.currentpt != this.currentpt) {
            return false
        }
        this.previousPort = this.currentpt
    }
    dock(portName) {
        this.currentpt = portName
    }
};


module.exports = { Ship };
