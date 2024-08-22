const { adicao, subtracao, multiplicacao, divisao } = require('../src/funcoes');

test('Adição de 1 + 2 é igual a 3', () => {
  expect(adicao(1, 2)).toBe(3);
});

test('Subtração de 5 - 3 é igual a 2', () => {
  expect(subtracao(5, 3)).toBe(2);
});

test('Multiplicação de 4 * 3 é igual a 12', () => {
  expect(multiplicacao(4, 3)).toBe(12);
});

test('Divisão de 10 / 2 é igual a 5', () => {
  expect(divisao(10, 2)).toBe(5);
});

test('Divisão por zero lança erro', () => {
  expect(() => divisao(10, 0)).toThrow("Divisão por zero não é permitida.");
});
