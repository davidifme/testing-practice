import { describe, it, expect } from "vitest";
import { reverseString } from "../js/reverseString";

describe('reverse string functions', () => {
    it('reverse string', () => {
        expect(reverseString('abc1')).toBe('1cba')
    })
})