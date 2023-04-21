/* eslint-disable no-unused-vars */
import Character from '../class';

test('Check class Character', () => {
  const result = new Character('Bob', 'Bowman');
  expect(result).toEqual({
    type: 'Bowman', name: 'Bob', health: 100, level: 1,
  });
});

test('Check Error symbol limit', () => {
  expect(() => {
    const result = new Character('B', 'Bowman');
  }).toThrowError('Ошибка. Нарушен лимит символов');
});

test('Check Error type of type', () => {
  expect(() => {
    const result = new Character('Bob', 22);
  }).toThrowError('Ошибка. Type не является строкой');
});

test('Check Error type from list of geroes', () => {
  expect(() => {
    const result = new Character('Bob', 'Bbbbbbb');
  }).toThrowError('Ошибка. Такого типа героя НЕТ');
});
