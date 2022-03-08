class Ship {
    constructor(shipName, itinerary, noOfPassengers) {
        this.shipName = shipName;
        this.noOfPassengers = noOfPassengers
        this.itinerary = itinerary;
        this.currentpt = itinerary.ports[0];
        this.previousPort = null;
        this.currentpt.addShip(this);
    }
    setSail() {
        const itinerary = this.itinerary;
        const currentPortIndex = itinerary.ports.indexOf(this.currentpt);
        if (currentPortIndex === (itinerary.ports.length - 1)) {
            throw new Error('end of itinerary reached');
        }
        this.previousPort = this.currentpt;
        this.currenpt = null;
    };

    dock() {
        const itinerary = this.itinerary;
        const previousPortIndex = itinerary.ports.indexOf(this.previousPort);
        this.currentpt = itinerary.ports[previousPortIndex + 1];
    };
};


module.exports = { Ship };
