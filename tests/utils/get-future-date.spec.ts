import { test, expect } from 'vitest';
import { getFutureDate } from './get-future-date';

test('increases date with one year', () => {
   const year = new Date().getFullYear();

   expect(getFutureDate(`${year}-10-10`).getFullYear()).toEqual(2024);
});