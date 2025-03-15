import { it, expect, describe } from "vitest"
import { calculator } from "../js/calculator"

describe('calculator add function', () => {
    it('add two numbers', () => {
        expect(calculator.add(2, 1)).toBe(3)
    })
})

describe('calculator subtract function', () => {
    it('subtract two numbers', () => {
        expect(calculator.subtract(3, 1)).toBe(2)
    })
})

describe('calculator multiply function', () => {
    it('multiply two numbers', () => {
        expect(calculator.multiply(3, 2)).toBe(6)
    })
    it('multiply by zero', () => {
        expect(calculator.multiply(3, 0)).toBe(0)
    })
})

describe('calculator divide function', () => {
    it('divide two numbers', () => {
        expect(calculator.divide(6, 2)).toBe(3)
    })
    it('divide by zero', () => {
        expect(calculator.divide(6, 0)).toBe(0)
    })
})