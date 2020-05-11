import Pokemon from '../../src/models/pokemon';

describe('Pokemon First Attack', () => {
    it('should be P1 to attack first when P1 speed > P2 speed', function () {
        let P1 = new Pokemon("P1", 5);
        let P2 = new Pokemon("P2", 4);

        expect(P1.attackFirst(P2)).toBe(true);
    });

    it('should be P1 to attack first when P1 speed = P2 speed', function () {
        let P1 = new Pokemon("P1", 5);
        let P2 = new Pokemon("P2", 5);

        expect(P1.attackFirst(P2)).toBe(true);
    });

    it('should be P2 to attack first when P1 speed < P2 speed', function () {
        let P1 = new Pokemon("P1", 4);
        let P2 = new Pokemon("P2", 5);

        expect(P1.attackFirst(P2)).toBe(false);
    });
});