import { describe, it, expect } from 'vitest';
import { capitalize } from '../js/capitalize';

describe('capitalize functions', () => {
    it('capitalize first letter', () => {
        expect(capitalize('letter')).toBe('Letter')
    })
})