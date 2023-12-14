import { luhn } from 'npm:cdigit@4'

const NUMBER_LENGTH = 16

export const generateNumber = (): string => {
    let digits = '544613'
    while (digits.length < NUMBER_LENGTH - 1) {
        digits += Math.floor(Math.random() * 10).toString()
    }
    return digits + luhn.compute(digits)
}
