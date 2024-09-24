const calculadora = require('../models/calculadora.js');

test('soma de 1 e 2 deve ser 3', () => {
  expect(calculadora.somar(1, 2)).toBe(3);
});

test('soma de números negativos -1 e -2 deve ser -3', () => {
  expect(calculadora.somar(-1, -2)).toBe(-3);
});

test('soma de 0 e 0 deve ser 0', () => {
  expect(calculadora.somar(0, 0)).toBe(0);
});

test('soma de 1.5 e 2.5 deve ser 4', () => {
  expect(calculadora.somar(1.5, 2.5)).toBe(4);
});

test('soma de número positivo e negativo 5 e -3 deve ser 2', () => {
  expect(calculadora.somar(5, -3)).toBe(2);
});
