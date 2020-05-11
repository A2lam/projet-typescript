import Pokemon from '../../src/models/pokemon';

describe('Pokemon First Attack', () => {
    it('should be P1 to attack first when P1 speed > P2 speed', function () {
        let P1 = new Pokemon("P1", 3, 5);
        let P2 = new Pokemon("P2", 3, 4);

        expect(P1.attackFirst(P2)).toBe(true);
    });

    it('should be P1 to attack first when P1 speed = P2 speed', function () {
        let P1 = new Pokemon("P1", 3, 5);
        let P2 = new Pokemon("P2", 3, 5);

        expect(P1.attackFirst(P2)).toBe(true);
    });

    it('should be P2 to attack first when P1 speed < P2 speed', function () {
        let P1 = new Pokemon("P1", 3, 4);
        let P2 = new Pokemon("P2", 3, 5);

        expect(P1.attackFirst(P2)).toBe(false);
    });
});

describe('Pokemon Attack', () => {
    it('should remain 2 in P2 life when P1 attack P2', function () {
        let P1 = new Pokemon("P1", 3, 4);
        let P2 = new Pokemon("P2", 3, 5);

        P1.attack(P2);
        expect(P2.life).toBe(2);
    });
});