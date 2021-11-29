import { checkAnagrams } from './index';

describe('checkAnagrams()', () => {
  test('empty sentence', () => {
    expect(checkAnagrams('')).toBe(false);
  });
});