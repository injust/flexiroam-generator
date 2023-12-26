import { generateNumber, IIN_LIST, NUMBER_LENGTH } from './mod.ts'
import { assert, assertEquals } from '@std/assert'
import { luhn } from 'npm:cdigit@4'

Deno.test('luhn check digit', () => {
    assert(luhn.validate(generateNumber()))
})

Deno.test('number length', () => {
    assertEquals(NUMBER_LENGTH, generateNumber().length)
})

Deno.test('number prefix', () => {
    const number = generateNumber()
    assert(
        Object.values(IIN_LIST).some((prefixes) =>
            prefixes.some((prefix) => number.startsWith(prefix))
        ),
    )
})
