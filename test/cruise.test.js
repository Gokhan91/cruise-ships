const Ship = require('../src/cruise.js');

//1 ship classı olacak
//passenger ve starting portu olacak
// shipe passenger ekleyebileceyik

describe('constructor', () => {
    it('returns an object', () => {
        let gurrada = new Ship('gurrada', 'girne', 0);
        expect(gurrada).toBeInstanceOf(Object)
    });
    it('has a starting port', () => {
        let gurrada = new Ship('gurrada', 'girne', 0);
        expect(gurrada.startingPort).toBe('girne');
    });
    it('has passengers', () => {
        let gurrada = new Ship('gurrada', 'girne', 5);
        expect(gurrada.noOfPassengers).toBe(5);
    });
    it('can set sail', () => {
        const gurrada = new Ship('gurrada', 'girne', 5);
        gurrada.setSail();
        expect(gurrada.startingPort).toBeFalsy();
    });
});