const calc = require('./calculadora')



describe('Testes para a calculadora', () => {
    const numero1 = 13
    const numero2 = 13

    const cases = [
        [2, 4, 6, -2, 8, 0.5],
        [20, 4, 24, 16, 80, 5],
        [6, 3, 9, 3, 18, 2],
        [10, 5, 15, 5, 50, 2]
    ]
    
    if (isNaN(numero1) || isNaN(numero2)) {
        throw new Error ('Os valores fornecidos não são numeros validos.')
    }

    const result1 = parseFloat(numero1) + parseFloat(numero2)
    const result2 = parseFloat(numero1) - parseFloat(numero2)
    const result3 = parseFloat(numero1) * parseFloat(numero2)
    const result4 = parseFloat(numero1) / parseFloat(numero2)

    test(`somar ${numero1} e ${numero2} deve resultar em ${result1}`, () => {
        const Soma = calc.soma(numero1, numero2)

        expect(Soma).toBe(result1)
    })
    

    test(`subtrair ${numero1} e ${numero2} deve resultar em ${result2}`, () => {
        const Sub = calc.subtracao(numero1, numero2)

        expect(Sub).toBe(result2)
    })

    test(`multiplicar ${numero1} e ${numero2} deve resultar em ${result3}`, () => {
        const mult = calc.multiplicacao(numero1, numero2)

        expect(mult).toBe(result3)
    })

    test(`dividir ${numero1} com ${numero2} deve resultar em ${result4}`, ()=> {
        const div = calc.divisao(numero1,numero2)
    
        expect(div).toBe(result4)
    })

    test.each(cases)(
        'com os valores %i e %i, soma: %i, subtração: %i, multiplicação: %i, divisão: %i',
        (n1, n2, r1, r2, r3, r4) => {
            expect(calc.soma(n1, n2)).toBe(r1);
            expect(calc.subtracao(n1, n2)).toBe(r2);
            expect(calc.multiplicacao(n1, n2)).toBe(r3);
            expect(calc.divisao(n1, n2)).toBe(r4);
        }
    )
})