const layout = [
    [
        { type: 'VIP', booked: false },
        { type: 'VIP', booked: true },
        { type: 'VIP', booked: true },
        { type: 'VIP', booked: false },
    ],
    [
        { type: 'NORMAL', booked: false },
        { type: 'VIP', booked: true },
        { type: 'VIP', booked: false },
        { type: 'NORMAL', booked: false },
    ],
    [
        { type: 'NORMAL', booked: false },
        { type: 'NORMAL', booked: true },
        { type: 'NORMAL', booked: true },
        { type: 'NORMAL', booked: false },
    ],
    [
        { type: 'ECONOMIC', booked: true },
        { type: 'NORMAL', booked: true },
        { type: 'NORMAL', booked: true },
        { type: 'ECONOMIC', booked: false },
    ],
    [
        { type: 'ECONOMIC', booked: false },
        { type: 'ECONOMIC', booked: true },
        { type: 'ECONOMIC', booked: false },
        { type: 'ECONOMIC', booked: false },
    ],
];

function checkSeatStatus(row, number) {
    if (typeof row !== 'string') { throw new TypeError('El primer parametro no es un string') }
    if (typeof number !== 'number') { throw new TypeError('El segundo parametro no es un número') }

    let rowNumber = getRowNumber(row)

    return layout[rowNumber][number].booked
}

function getRowNumber(letter) {
    return letter.charCodeAt(0) - 65;
}

function book(row, number) {
    if (checkSeatStatus(row, number)) {
        return `La silla ${row}${number} ya se encuentra reservada`
    }

    let rowNumber = getRowNumber(row)
    layout[rowNumber][number].booked = true;
    return `La silla ${row}${number} fue reservada con éxito`
}

module.exports = { checkSeatStatus, getRowNumber, book }