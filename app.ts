/** ����������� �������. ������� ������ ��-3.
 * ��������: �� ����� ����, � ������� ���������� ��������� ����� �������, ����� ��� ������������� �� ����� 3:
 * ������, ����������, �����. � ������ �� ��� ������ ������ ��������� 3 ������ �����(����, ��� � ������), "����������" ���� ������� (������ � �����,
 * ������� � ���������� � �.�.). ��������� ����������� ������� ��� �������� ��������� ������, ����������� ������, ������� �����������, �������.
 */

// ���������� ������
interface Warrior
{
    hp: number;
    dmg: number;
    location: string;// ��� ���� ���������� ��������������� ��, ��� ������ �������� � ���� � ������ ��������(�������, ������ � �.�.)

    foo();
}

interface Mage
{
    hp: number;
    dmg: number;
    location: string;

    foo();
}

interface Archer
{
    hp: number;
    dmg: number;
    location: string;

    foo();
}
// ���������� ������ �����
class KnightWarrior implements Warrior
{
    hp: number;
    dmg: number;
    location: string;

    constructor(hp: number, dmg: number) { this.hp = hp; this.dmg = dmg; this.location = "Castle" };
    foo() { console.log("Knight Warrior did foo\n") };
}

class KnightMage implements Mage {
    hp: number;
    dmg: number;
    location: string;

    constructor(hp: number, dmg: number) { this.hp = hp; this.dmg = dmg; this.location = "Castle" };
    foo() { console.log("Knight Mage did foo\n") };
}

class KnightArcher implements Archer {
    hp: number;
    dmg: number;
    location: string;

    constructor(hp: number, dmg: number) { this.hp = hp; this.dmg = dmg; this.location = "Castle" };
    foo() { console.log("Knight Archer did foo\n") };
}

// ���������� ������ ������
class SwampWarrior implements Warrior {
    hp: number;
    dmg: number;
    location: string;

    constructor(hp: number, dmg: number) { this.hp = hp; this.dmg = dmg; this.location = "Swamp" };
    foo() { console.log("Swamp Warrior did foo\n") };
}

class SwampMage implements Mage {
    hp: number;
    dmg: number;
    location: string;

    constructor(hp: number, dmg: number) { this.hp = hp; this.dmg = dmg; this.location = "Swamp" };
    foo() { console.log("Swamp Mage did foo\n") };
}

class SwampArcher implements Archer {
    hp: number;
    dmg: number;
    location: string;

    constructor(hp: number, dmg: number) { this.hp = hp; this.dmg = dmg; this.location = "Swamp" };
    foo() { console.log("Swamp Archer did foo\n") };
}

// ���������� ������ ����������
class DungeonWarrior implements Warrior {
    hp: number;
    dmg: number;
    location: string;

    constructor(hp: number, dmg: number) { this.hp = hp; this.dmg = dmg; this.location = "Dungeon" };
    foo() { console.log("Dungeon Warrior did foo\n") };
}

class DungeonMage implements Mage {
    hp: number;
    dmg: number;
    location: string;

    constructor(hp: number, dmg: number) { this.hp = hp; this.dmg = dmg; this.location = "Dungeon" };
    foo() { console.log("Dungeon Mage did foo\n") };
}

class DungeonArcher implements Archer {
    hp: number;
    dmg: number;
    location: string;

    constructor(hp: number, dmg: number) { this.hp = hp; this.dmg = dmg; this.location = "Dungeon" };
    foo() { console.log("Dungeon Archer did foo\n") };
}

// ��������� ����������� �������
interface EnemyFactory
{
    createWarrior(): Warrior;
    createMage(): Mage;
    createArcher(): Archer;
}

// ���������� ������� ��� �����
class CastleFactory implements EnemyFactory
{
    createWarrior(): Warrior {return new KnightWarrior(40, 40)};
    createMage(): Mage { return new KnightMage(40, 40) };
    createArcher(): Archer { return new KnightArcher(40, 40) };
}

// ���������� ������� ��� ������
class SwampFactory implements EnemyFactory
{
    createWarrior(): Warrior { return new SwampWarrior(40, 40) };
    createMage(): Mage { return new SwampMage(40, 40) };
    createArcher(): Archer { return new SwampArcher(40, 40) };
}

// ���������� ������� ��� ������
class DungeonFactory implements EnemyFactory
{
    createWarrior(): Warrior { return new DungeonWarrior(40, 40) };
    createMage(): Mage { return new DungeonMage(40, 40) };
    createArcher(): Archer { return new DungeonArcher(40, 40) };
}

// ��� ����������
{
    // ������� ��� �������: 1 (Castle), 2(Swamp), 3(Dungeon)
    let currentLocation: number = 2;
    let factory: EnemyFactory;

    switch (currentLocation)
    {
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
    let Warrior: Warrior = factory.createWarrior();
    let Mage: Mage = factory.createMage();
    let Archer: Archer = factory.createArcher();

    Warrior.foo();
    Mage.foo();
    Archer.foo();
}