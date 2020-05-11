import Pokemon from '../../src/models/pokemon';

describe('Pokemon', () => {
    it('should be P1 to attack first when add P1 speed > P2', function () {
        let P1 = new Pokemon("P1", 5);
        let P2 = new Pokemon("P2", 4);

        expect(P1.attack(P2)).toBe("P1");
    });
});