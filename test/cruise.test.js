const { Ship } = require('../src/cruise.js');
const { Port } = require('../src/port.js');
const { Itinerary } = require('../src/itinerary.js');

//1 ship classı olacak
//passenger ve starting portu olacak
// shipe passenger ekleyebileceyik

describe('constructor', () => {
    it('returns an object', () => {
        let Limasol = new Port('Limasol');
        let tour1 = new Itinerary([Limasol]);
        let gurrada = new Ship('gurrada', tour1, 0);
        expect(gurrada).toBeInstanceOf(Object)
    });
    it('has a starting port', () => {
        let Limasol = new Port('Limasol');
        let tour1 = new Itinerary([Limasol]);
        let gurrada = new Ship('gurrada', tour1, 0);
        expect(gurrada.currentpt).toBe(Limasol);
    });
    it('has passengers', () => {
        let Limasol = new Port('Limasol');
        let tour1 = new Itinerary([Limasol]);
        let gurrada = new Ship('gurrada', tour1, 5);
        expect(gurrada.noOfPassengers).toBe(5);
    });
});
describe('constructor', () => {
    it('can set sail', () => {
        let Limasol = new Port('Limasol')
        let Magusa = new Port('Magusa')
        let tour1 = new Itinerary([Limasol, Magusa])
        let gurrada = new Ship('gurrada', tour1, 5);
        gurrada.setSail();
        expect(gurrada.currentpt).not.toBe(true);
        expect(gurrada.previousPort).toEqual(Limasol)
    });
});
describe('constructor', () => {
    it('can dock to another port', () => {
        let Limasol = new Port('Limasol')
        let Magusa = new Port('Magusa')
        let tour1 = new Itinerary([Limasol, Magusa])
        let gurrada = new Ship('gurrada', tour1, 0);
        gurrada.setSail();
        gurrada.dock();
        expect(gurrada.currentpt).toBe(Magusa);
    });
    it('can not sail further than its itinerary', () => {
        let Limasol = new Port('Limasol')
        let Magusa = new Port('Magusa')
        let tour1 = new Itinerary([Limasol, Magusa])
        let gurrada = new Ship('gurrada', tour1, 0);
        gurrada.setSail();
        gurrada.dock();
        expect(() => gurrada.setSail()).toThrowError('end of itinerary reached');
    });
});

describe('constructor', () => {
    it('returns an object', () => {
        let Limasol = new Port('Limasol');
        expect(Limasol).toBeInstanceOf(Object)
    });
    it('has a port name', () => {
        let Limasol = new Port('Limasol');
        expect(Limasol.portName).toBe('Limasol');
    });
});

describe('constructor', () => {
    it('can add ship', () => {
        let Limasol = new Port('Limasol');
        let tour1 = new Itinerary([Limasol])
        let gurrada = new Ship('gurrada', tour1, 0);
        Limasol.addShip(gurrada);
        expect(Limasol.ships).toContain(gurrada);
    });
});

describe('constructor', () => {
    it("can remove a ship", () => {
        let Limasol = new Port('Limasol');
        let tour1 = new Itinerary([Limasol])
        let gurrada = new Ship('gurrada', tour1, 0);
        let beytambal = new Ship('beytambal', tour1, 0);
        Limasol.removeShip(beytambal);

        expect(Limasol.ships).toEqual([gurrada]);
    });
});


describe('constructor', () => {
    it('gets added to port on instantiation', () => {
        let Limasol = new Port('Limasol');
        let tour1 = new Itinerary([Limasol])
        let gurrada = new Ship('gurrada', tour1, 0);
        expect(Limasol.ships).toContain(gurrada);

    });
});

describe('constructor', () => {
    it('returns an object', () => {
        let tour1 = new Itinerary('tour1');
        expect(tour1).toBeInstanceOf(Object)
    });
    it('can have ports', () => {
        let Limasol = new Port('Limasol')
        let Magusa = new Port('Magusa')
        let tour1 = new Itinerary([Limasol, Magusa]);
        expect(tour1.ports).toEqual([Limasol, Magusa])
    });
});
