import Pokemon from '../../src/models/pokemon';
import Battle from '../../src/models/battle';

describe('Pokemon First Attack', () => {
    it('should be P1 to attack first when P1 speed > P2 speed', function () {
        let p1 = new Pokemon("P1", 3, 5);
        let p2 = new Pokemon("P2", 3, 4);
        let battle = new Battle(p1, p2);

        expect(battle.attackFirst(p1, p2)).toBe(true);
    });

    it('should be P1 to attack first when P1 speed = P2 speed', function () {
        let p1 = new Pokemon("P1", 3, 5);
        let p2 = new Pokemon("P2", 3, 5);
        let battle = new Battle(p1, p2);

        expect(battle.attackFirst(p1, p2)).toBe(true);
    });

    it('should be P2 to attack first when P1 speed < P2 speed', function () {
        let p1 = new Pokemon("P1", 3, 4);
        let p2 = new Pokemon("P2", 3, 5);
        let battle = new Battle(p1, p2);

        expect(battle.attackFirst(p1, p2)).toBe(false);
    });
});

describe('Pokemon Attack', () => {
    it('should remain 2 in P2 life when P1 attack P2', function () {
        let p1 = new Pokemon("P1", 3, 4);
        let p2 = new Pokemon("P2", 3, 5);
        let battle = new Battle(p1, p2);

        console.log(`le nombre de vie de ${p2.name} avant l'attaque est de ${p2.life}`);
        battle.attack(p1, p2);
        console.log(`le nombre de vie de ${p2.name} après l'attaque est de ${p2.life}`);

        expect(p2.life).toBe(2);
    });
});

describe('Pokemon Fight', () => {
    it('should return P1 won the Fight over P2', function () {
        let p1 = new Pokemon("P1", 3, 5);
        let p2 = new Pokemon("P2", 3, 4);
        let battle = new Battle(p1, p2);

        let winnerP = battle.fight(p1, p2);

        expect(winnerP).toBe(p1);
    });
});