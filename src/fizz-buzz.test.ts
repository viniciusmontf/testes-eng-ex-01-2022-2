import FizzBuzz from "./fizz-buzz";

describe('Conferir se o método de FizzBuzz retorna o esperado', () => {
    test('Para o número 3 deve retornar Fizz', () => {
        //setup
        const fizzbuzz = new FizzBuzz();
        //action
        const resultado = fizzbuzz.fizzbuzz(3);
        //expectation
        expect (resultado).toBe('Fizz');
    })

    test('Para o número 5 deve retornar Buzz', () => {
        //setup
        const fizzbuzz = new FizzBuzz();
        //action
        const resultado = fizzbuzz.fizzbuzz(5);
        //expectation
        expect (resultado).toBe('Buzz');
    })

    test('Para o número 15 deve retornar FizzBuzz', () => {
        //setup
        const fizzbuzz = new FizzBuzz();
        //action
        const resultado = fizzbuzz.fizzbuzz(15);
        //expectation
        expect (resultado).toBe('FizzBuzz');
    })

    test('Para o número 28 deve retornar 28', () => {
        //setup
        const fizzbuzz = new FizzBuzz();
        //action
        const resultado = fizzbuzz.fizzbuzz(28);
        //expectation
        expect (resultado).toBe(28);
    })

    test('Para o número 45 deve retornar FizzBuzz', () => {
        //setup
        const fizzbuzz = new FizzBuzz();
        //action
        const resultado = fizzbuzz.fizzbuzz(45);
        //expectation
        expect (resultado).toBe('FizzBuzz');
    })

    test('Para o número 50 deve retornar Buzz', () => {
        //setup
        const fizzbuzz = new FizzBuzz();
        //action
        const resultado = fizzbuzz.fizzbuzz(50);
        //expectation
        expect (resultado).toBe('Buzz');
    })

    test('Para o número 75 deve retornar FizzBuzz', () => {
        //setup
        const fizzbuzz = new FizzBuzz();
        //action
        const resultado = fizzbuzz.fizzbuzz(75);
        //expectation
        expect (resultado).toBe('FizzBuzz');
    })

    test('Para o número 99 deve retornar Fizz', () => {
        //setup
        const fizzbuzz = new FizzBuzz();
        //action
        const resultado = fizzbuzz.fizzbuzz(99);
        //expectation
        expect (resultado).toBe('Fizz');
    })

    test('Para o número 98 deve retornar 98', () => {
        //setup
        const fizzbuzz = new FizzBuzz();
        //action
        const resultado = fizzbuzz.fizzbuzz(98);
        //expectation
        expect (resultado).toBe(98);
    })

})

