const { Ship } = require('../src/cruise.js');
const { Port } = require('../src/port.js');
const { Itinerary } = require('../src/itinerary.js');

//1 ship classı olacak
//passenger ve starting portu olacak
// shipe passenger ekleyebileceyik

describe('constructor', () => {
    it('returns an object', () => {
        const Limasol = new Port('Limasol');
        const tour1 = new Itinerary([Limasol]);
        const gurrada = new Ship('gurrada', tour1, 0);
        expect(gurrada).toBeInstanceOf(Object)
    });
    it('has a starting port', () => {
        const Limasol = new Port('Limasol');
        const tour1 = new Itinerary([Limasol]);
        const gurrada = new Ship('gurrada', tour1, 0);
        expect(gurrada.currentpt).toBe(Limasol);
    });
    it('has passengers', () => {
        const Limasol = new Port('Limasol');
        const tour1 = new Itinerary([Limasol]);
        const gurrada = new Ship('gurrada', tour1, 5);
        expect(gurrada.noOfPassengers).toBe(5);
    });
    it('can set sail', () => {
        const Limasol = new Port('Limasol')
        const Magusa = new Port('Magusa')
        const tour1 = new Itinerary([Limasol, Magusa])
        const gurrada = new Ship('gurrada', tour1, 5);
        gurrada.setSail();
        expect(gurrada.currentpt).not.toBe(true);
        expect(gurrada.previousPort).toEqual(Limasol)
    });
    it('can dock to another port', () => {
        const Limasol = new Port('Limasol')
        const Magusa = new Port('Magusa')
        const tour1 = new Itinerary([Limasol, Magusa])
        const gurrada = new Ship('gurrada', tour1, 0);
        gurrada.setSail();
        gurrada.dock();
        expect(gurrada.currentpt).toBe(Magusa);
    });
    it('can not sail further than its itinerary', () => {
        const Limasol = new Port('Limasol')
        const Magusa = new Port('Magusa')
        const tour1 = new Itinerary([Limasol, Magusa])
        const gurrada = new Ship('gurrada', tour1, 0);
        gurrada.setSail();
        gurrada.dock();
        expect(() => gurrada.setSail()).toThrowError('end of itinerary reached');
    });
});

describe('constructor', () => {
    it('returns an object', () => {
        const Limasol = new Port('Limasol');
        expect(Limasol).toBeInstanceOf(Object)
    });
    it('has a port name', () => {
        const Limasol = new Port('Limasol');
        expect(Limasol.portName).toBe('Limasol');
    });
});
describe('constructor', () => {
    it('returns an object', () => {
        const tour1 = new Itinerary('tour1');
        expect(tour1).toBeInstanceOf(Object)
    });
    it('can have ports', () => {
        const Limasol = new Port('Limasol')
        const Magusa = new Port('Magusa')
        const tour1 = new Itinerary([Limasol, Magusa]);
        expect(tour1.ports).toEqual([Limasol, Magusa])
    });
});
