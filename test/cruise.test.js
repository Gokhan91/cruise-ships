const { Ship } = require('../src/cruise.js');
const { Port } = require('../src/port.js');


//1 ship classı olacak
//passenger ve starting portu olacak
// shipe passenger ekleyebileceyik

describe('constructor', () => {
    it('returns an object', () => {
        let gurrada = new Ship('gurrada', 'girne', 'girne', 0);
        expect(gurrada).toBeInstanceOf(Object)
    });
    it('has a starting port', () => {
        let Limasol = new Port('Limasol')
        let gurrada = new Ship('gurrada', Limasol, Limasol, 0);
        expect(gurrada.startingPt).toBe(Limasol);
    });
    it('has passengers', () => {
        let gurrada = new Ship('gurrada', 'girne', 'girne', 5);
        expect(gurrada.noOfPassengers).toBe(5);
    });
    it('can set sail', () => {
        let gurrada = new Ship('gurrada', 'girne', 'girne', 5);
        gurrada.setSail();
        expect(gurrada.startingPt).not.toBe(true);
    });
    it('can dock to another port', () => {
        let Limasol = new Port('Limasol')
        let Magusa = new Port('Magusa')
        let gurrada = new Ship('gurrada', Limasol, Limasol, 0);
        gurrada.dock(Magusa)
        expect(gurrada.location).toBe(Magusa);
    });

    describe('constructor', () => {
        it('returns an object', () => {
            let girne = new Port('girne');
            expect(girne).toBeInstanceOf(Object)
        });
        it('has a port name', () => {
            let babaullo = new Port('Girne');
            expect(babaullo.portName).toBe('Girne');
        });
    });
});