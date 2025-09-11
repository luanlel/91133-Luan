const test = require('node:test');
const { soma, sub, multi, div } = require('./calculadora');

test('A soma de 2 + 3 é igual a 5', () => {
    expect(soma(2, 3)).toBe(5);
});

test('A subtração de 10 - 5 é igual a 5', () => {
    expect(sub(10, 5)).toBe(5);
});

test('A multiplicação de 50 * 5 é igual a 250', () => {
    expect(multi(50, 5)).toBe(250);
});

test('A divisão de 100 / 2 é igual a 50', () => {
    expect(div(100, 2)).toBe(50);
});

test('A divisão de 1 com 0 é inválida', () => {
    expect(div(1, 0)).toBe(Infinity);
});

// soma testes // √

test('A soma de (-)18 + (-)20 é igual a (-)38', () => {
    expect(soma(-18, -20)).toBe(-38);
});

test('A soma de (-)73 + 50 é igual a (-)23', () => {
    expect(soma(-73, 50)).toBe(-23);
});

test('A soma de (-)100 + (-)0,21 é igual a (-)100,21', () => {
    expect(soma(-100, -0,21)).toBe(-100,21);
});

test('A soma de (-)21,30 + √25 é igual a (-)16,3', () => {
    expect(soma(-21.30, Math.sqrt(25))).toBe(-16.3);
});

test('A soma de 38 + (-)14/3 é igual a ~=34.6', () => {
    expect(soma(30, 14 / 3)).toBe(34.666666666666664);
});

// sub testes

test('A subtração de (-)√103 - (-)√64 é igual a (-)99,79', () => {
    expect(sub(Math.sqrt(81), Math.sqrt(64))).toBe(1);
});

test('A subtração de (-)21,30 - √25 é igual a (-)26,3', () => {
    expect(sub(-21.30, Math.sqrt(25))).toBe(-26.3);
});

test('A subtração de 741 - 26**7 é igual a (-)8031809435', () => {
    expect(sub(741, 26**7)).toBe(-8031809435);
});

test('A subtração de 200 - √25/10 é igual a 199,5', () => {
    expect(sub(200, Math.sqrt(25)/ 10)).toBe(199.5);
});

test('A subtração de 0 - (-)0,001 é igual a 0,001', () => {
    expect(sub(0, -0.001)).toBe(0.001);
});

// multi testes

test('A multiplicação de (-)12 * (-)12 é igual a 144', () => {
    expect(multi(-12, -12)).toBe(144);
});

test('A multiplicação de (-)30,50/ 3 * (-)12**4 é igual a -210816', () => {
    expect(multi(-30.50 / 3, 12**4)).toBe(-210816);
});

test('A multiplicação de 0,001 * 0,001 é igual a 0,000001', () => {
    expect(multi(0.001, 0.001)).toBe(0.000001);
});

test('A multiplicação de √4**3 * (-)15,3 é igual a ', () => {
    expect(multi(Math.sqrt(4)**3, -15.3)).toBe(-122.4);
});

test('A multiplicação de 1000 / 6 * (-)1000 é igual a 0', () => {
    expect(multi(1000 / 6, -1000)).toBe(-166666.66666666666);
});

// div testes

test('A divisão de (-)144 / (-)12 é igual a 12', () => {
    expect(div(-144, -12)).toBe(12);
});

test('A divisão de (-)210816 / (-)30,50/ 3 é igual a 20736', () => {
    expect(div(-210816, -30.50 / 3)).toBe(20736);
});

test('A divisão de 0,000001 / 0,001 é igual a 0,001', () => {
    expect(div(0.000001, 0.001)).toBe(0.001);
});

test('A divisão de (-)122,4 / √4**3 é igual a (-)15,3', () => {
    expect(div(-122.4, Math.sqrt(4)**3)).toBe(-15.3);
});