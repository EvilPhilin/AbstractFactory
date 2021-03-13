/** ����������� �������. ������� ������ ��-3.
 * ��������: �� ����� ����, � ������� ���������� ��������� ����� �������, ����� ��� ������������� �� ����� 3:
 * ������, ����������, �����. � ������ �� ��� ������ ������ ��������� 3 ������ �����(����, ��� � ������), "����������" ���� ������� (������ � �����,
 * ������� � ���������� � �.�.). ��������� ����������� ������� ��� �������� ��������� ������, ����������� ������, ������� �����������, �������.
 */
// ���������� ������ �����
class KnightWarrior {
    constructor(hp, dmg) { this.hp = hp; this.dmg = dmg; this.location = "Castle"; }
    ;
    foo() { console.log("Knight Warrior did foo\n"); }
    ;
}
class KnightMage {
    constructor(hp, dmg) { this.hp = hp; this.dmg = dmg; this.location = "Castle"; }
    ;
    foo() { console.log("Knight Mage did foo\n"); }
    ;
}
class KnightArcher {
    constructor(hp, dmg) { this.hp = hp; this.dmg = dmg; this.location = "Castle"; }
    ;
    foo() { console.log("Knight Archer did foo\n"); }
    ;
}
// ���������� ������ ������
class SwampWarrior {
    constructor(hp, dmg) { this.hp = hp; this.dmg = dmg; this.location = "Swamp"; }
    ;
    foo() { console.log("Swamp Warrior did foo\n"); }
    ;
}
class SwampMage {
    constructor(hp, dmg) { this.hp = hp; this.dmg = dmg; this.location = "Swamp"; }
    ;
    foo() { console.log("Swamp Mage did foo\n"); }
    ;
}
class SwampArcher {
    constructor(hp, dmg) { this.hp = hp; this.dmg = dmg; this.location = "Swamp"; }
    ;
    foo() { console.log("Swamp Archer did foo\n"); }
    ;
}
// ���������� ������ ����������
class DungeonWarrior {
    constructor(hp, dmg) { this.hp = hp; this.dmg = dmg; this.location = "Dungeon"; }
    ;
    foo() { console.log("Dungeon Warrior did foo\n"); }
    ;
}
class DungeonMage {
    constructor(hp, dmg) { this.hp = hp; this.dmg = dmg; this.location = "Dungeon"; }
    ;
    foo() { console.log("Dungeon Mage did foo\n"); }
    ;
}
class DungeonArcher {
    constructor(hp, dmg) { this.hp = hp; this.dmg = dmg; this.location = "Dungeon"; }
    ;
    foo() { console.log("Dungeon Archer did foo\n"); }
    ;
}
// ���������� ������� ��� �����
class CastleFactory {
    createWarrior() { return new KnightWarrior(40, 40); }
    ;
    createMage() { return new KnightMage(40, 40); }
    ;
    createArcher() { return new KnightArcher(40, 40); }
    ;
}
// ���������� ������� ��� ������
class SwampFactory {
    createWarrior() { return new SwampWarrior(40, 40); }
    ;
    createMage() { return new SwampMage(40, 40); }
    ;
    createArcher() { return new SwampArcher(40, 40); }
    ;
}
// ���������� ������� ��� ������
class DungeonFactory {
    createWarrior() { return new DungeonWarrior(40, 40); }
    ;
    createMage() { return new DungeonMage(40, 40); }
    ;
    createArcher() { return new DungeonArcher(40, 40); }
    ;
}
// ��� ����������
{
    // ������� ��� �������: 1 (Castle), 2(Swamp), 3(Dungeon)
    let currentLocation = 3;
    let factory;
    switch (currentLocation) {
        case 1:
            {
                factory = new CastleFactory;
                break;
            }
        case 2:
            {
                factory = new SwampFactory;
                break;
            }
        case 3:
            {
                factory = new DungeonFactory;
                break;
            }
    }
    let Warrior = factory.createWarrior();
    let Mage = factory.createMage();
    let Archer = factory.createArcher();
    Warrior.foo();
    Mage.foo();
    Archer.foo();
}
//# sourceMappingURL=app.js.map