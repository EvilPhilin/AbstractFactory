/** Абстрактная фабрика. Курдяев Сергей ПМ-3.
 * Проблема: мы пишем игру, в которой существует несколько видов локаций, пусть для определённости их будет 3:
 * болото, подземелье, замок. В каждой из них игрока должно встречать 3 разных врага(воин, маг и лучник), "подходящих" этой локации (рыцари в замке,
 * скелеты в подземелье и т.п.). Реализуем абстрактную фабрику для создания комплекта врагов, наполняющих нужную, заранее неизвестную, локацию.
 */

// Интерфейсы врагов
interface Warrior
{
    hp: number;
    dmg: number;
    location: string;// Под этим параметром подразумевается всё, что должно меняться у моба в разных локациях(Тектура, абилки и т.д.)

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
// Реализация врагов замок
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

// Реализация врагов Болото
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

// Реализация врагов Подземелье
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

// Интерфейс абстрактной фабрики
interface EnemyFactory
{
    createWarrior(): Warrior;
    createMage(): Mage;
    createArcher(): Archer;
}

// Реализация фабрики для Замка
class CastleFactory implements EnemyFactory
{
    createWarrior(): Warrior {return new KnightWarrior(40, 40)};
    createMage(): Mage { return new KnightMage(40, 40) };
    createArcher(): Archer { return new KnightArcher(40, 40) };
}

// Реализация фабрики для Болота
class SwampFactory implements EnemyFactory
{
    createWarrior(): Warrior { return new SwampWarrior(40, 40) };
    createMage(): Mage { return new SwampMage(40, 40) };
    createArcher(): Archer { return new SwampArcher(40, 40) };
}

// Реализация фабрики для Болота
class DungeonFactory implements EnemyFactory
{
    createWarrior(): Warrior { return new DungeonWarrior(40, 40) };
    createMage(): Mage { return new DungeonMage(40, 40) };
    createArcher(): Archer { return new DungeonArcher(40, 40) };
}

// Код приложения
{
    // Локация для отладки: 1 (Castle), 2(Swamp), 3(Dungeon)
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