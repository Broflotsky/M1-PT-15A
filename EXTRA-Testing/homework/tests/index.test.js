const { checkSeatStatus, getRowNumber, book } = require('../homework')

describe('checkSeatStatus tests', () => {
    // TEST 1
    it('checkSeatStatus is a function', () => {
        expect(typeof checkSeatStatus).toBe('function')
    })

    // TEST 2
    it('El primer parametro debe ser un string', () => {
        expect(() => checkSeatStatus(2)).toThrow(new TypeError('El primer parametro no es un string'))
    })

    // TEST 3
    it('El primer parametro debe ser un string', () => {
        expect(() => checkSeatStatus('A', '2')).toThrow(new TypeError('El segundo parametro no es un número'))
    })

    // TEST 5
    it('Deberia retornar true si la butaca esta reservada', () => {
        expect(checkSeatStatus('A', 1)).toBe(true)
    })

    it('Deberia retornar false si la butaca no esta reservada', () => {
        expect(checkSeatStatus('E', 3)).toBe(false)
    })
})

describe('getRowNumber tests', () => {
    // TEST 4
    it('Deberia retornar 0 si le pasamos A', () => {
        expect(getRowNumber('A')).toBe(0)
    })

    it('Deberia retornar 2 si le pasamos C', () => {
        expect(getRowNumber('C')).toBe(2)
    })
})

describe('book', () => {
    it(`Deberia retornar 'La silla XX fue reservada con éxito', si la silla no esta reservada`, () => {
        expect(book('E', 3)).toBe('La silla E3 fue reservada con éxito')
    })
    it(`Deberia retornar 'La silla XX ya se encuentra reservada', si la silla esta reservada`, () => {
        expect(book('A', 1)).toBe('La silla A1 ya se encuentra reservada')
    })
})




