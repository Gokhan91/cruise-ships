const { Ship, Port } = require('../src/cruise.js');


//1 ship classı olacak
//passenger ve starting portu olacak
// shipe passenger ekleyebileceyik

describe('constructor', () => {
    it('returns an object', () => {
        let gurrada = new Ship('gurrada', 'girne', 'girne', 0);
        expect(gurrada).toBeInstanceOf(Object)
    });
    it('has a starting port', () => {
        let gurrada = new Ship('gurrada', 'girne', 'girne', 0);
        expect(gurrada.startingPt).toBe('girne');
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