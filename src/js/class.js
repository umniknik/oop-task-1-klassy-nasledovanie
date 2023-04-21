export default class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Ошибка. Нарушен лимит символов');
    }

    if (!(typeof type === 'string')) {
      throw new Error('Ошибка. Type не является строкой');
    }

    const arrTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (!arrTypes.includes(type)) {
      throw new Error('Ошибка. Такого типа героя НЕТ');
    }

    this.type = type;
    this.name = name;
    this.health = 100;
    this.level = 1;
  }
}
