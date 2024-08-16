import { sample } from '@std/collections'
import { luhn } from 'npm:cdigit@4'

export const IIN_LIST = {
    'CHN': [
        '519961',
        '523062',
        '526199',
        '529782',
        '545950',
        '558869',
    ],
    'HKG': ['517791', '552415'],
    'IDN': ['516634', '533672', '537793'],
    'JPN': [
        '5214988801',
        '5214988802',
        '5214988803',
        '5214988804',
        '5214988805',
        '5214988806',
        '5214988807',
        '5214988808',
        '5214988809',
        '521498881',
        '521498882',
        '521498883',
        '521498884',
    ],
    'MAC': ['521655'],
    'MYS': ['526120', '537812'],
    'SGP': ['54112918', '54112919', '54112920', '54112921', '54255040'],
    'THA': ['526532', '537798'],
}

export const NUMBER_LENGTH = 16

export const generateNumber = (): string => {
    const [_country, prefixes] = sample(Object.entries(IIN_LIST))!
    let digits = sample(prefixes)!

    while (digits.length < NUMBER_LENGTH - 1) {
        digits += Math.floor(Math.random() * 10).toString()
    }
    return digits + luhn.compute(digits)
}
