class Port {
    constructor(portName) {
        this.portName = portName;
        this.ships = [];
    }
    addShip(shipName) {
        this.ships.push(shipName);

    };
    removeShip(shipName) {
        this.ships.indexOf(shipName) !== -1 && this.ships.splice(this.ships.indexOf(shipName), 1);
    };
};

module.exports = { Port };