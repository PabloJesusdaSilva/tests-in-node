import { expect, test } from 'vitest'; 
import { Appointment } from './appointments';
import { getFutureDate } from '../../tests/utils/get-future-date';

test('create an apppointment', () => {
   const startsAt = getFutureDate('2023-10-10');
   const endsAt = getFutureDate('2023-10-11');
   
   const apppointment = new Appointment({
      customer: 'Jhon Doe',
      startsAt,
      endsAt
   });


   expect(apppointment).toBeInstanceOf(Appointment);
   expect(apppointment.customer).toEqual('Jhon Doe');
});

test('cannot create an appointment with end date before start date', () => {
   const startsAt = getFutureDate('2023-10-10');
   const endsAt = getFutureDate('2023-10-09');

   expect(() => {
      return new Appointment({
         customer: 'Jhon Doe',
         startsAt,
         endsAt
      })
   }).toThrow()
});

test('cannot create an appointment with start date before start date', () => {
   const startsAt = new Date();
   const endsAt = new Date();

   startsAt.setDate(startsAt.getDate() - 1);
   endsAt.setDate(endsAt.getDate() + 3);

   expect(() => {
      return new Appointment({
         customer: 'Jhon Doe',
         startsAt,
         endsAt
      })
   }).toThrow()
});