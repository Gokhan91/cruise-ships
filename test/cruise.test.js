const { Ship } = require('../src/cruise.js');
const { Port } = require('../src/port.js');
const { Itinerary } = require('../src/itinerary.js');

describe('constructor', () => {
    let gurrada;
    let Limasol;
    let Magusa;
    let tour1;

    beforeEach(() => {
        Limasol = new Port('Limasol')
        Magusa = new Port('Magusa')
        tour1 = new Itinerary([Limasol, Magusa])
        gurrada = new Ship('gurrada', tour1, 5);
    });

    it('returns an object', () => {
        expect(gurrada).toBeInstanceOf(Object)
    });

    it('has a starting port', () => {
        expect(gurrada.currentpt).toBe(Limasol);
    });

    it('has passengers', () => {
        expect(gurrada.noOfPassengers).toBe(5);
    });

    it('can set sail', () => {
        gurrada.setSail();
        expect(gurrada.currentpt).not.toBe(true);
        expect(Limasol.ships).not.toContain(gurrada);

    });

    it('can dock to another port', () => {
        gurrada.setSail();
        gurrada.dock();
        expect(gurrada.currentpt).toBe(Magusa);
    });

    it('can not sail further than its itinerary', () => {
        gurrada.setSail();
        gurrada.dock();
        expect(() => gurrada.setSail()).toThrowError('end of itinerary reached');
    });

    it('returns an object', () => {
        let Limasol = new Port('Limasol');
        expect(Limasol).toBeInstanceOf(Object)
    });
    it('has a port name', () => {
        let Limasol = new Port('Limasol');
        expect(Limasol.portName).toBe('Limasol');
    });

    it('can add ship', () => {
        Limasol.addShip(gurrada);
        expect(Limasol.ships).toContain(gurrada);
    });

    it("can remove a ship", () => {
        let beytambal = new Ship('beytambal', tour1, 0);
        Limasol.removeShip(beytambal);
        expect(Limasol.ships).toEqual([gurrada]);
    });

    it('gets added to port on instantiation', () => {

        expect(Limasol.ships).toContain(gurrada);

    });

    it('returns an object', () => {
        let tour1 = new Itinerary('tour1');
        expect(tour1).toBeInstanceOf(Object)
    });
    it('can have ports', () => {
        expect(tour1.ports).toEqual([Limasol, Magusa])
    });
});
