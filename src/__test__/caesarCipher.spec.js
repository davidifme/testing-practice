import { describe, expect, it } from "vitest";
import { caesarCipher } from "../js/caesarCipher";

describe('caesarCipher function', () => {
    it('shift char', () => {
        expect(caesarCipher('abc', 1)).toBe('bcd')
    })
    it('wrapping', () => {
        expect(caesarCipher('xyz', 3)).toBe('abc')
    })
    it('numbers', () => {
        expect(caesarCipher('abc1', 1)).toBe('bcd1')
    })
    it('case preservation', () => {
        expect(caesarCipher('aBc', 1)).toBe('bCd')
    })
    it('punctuation', () => {
        expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!')
    })
})