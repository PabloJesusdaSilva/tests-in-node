import { describe, expect, it } from 'vitest';
import { CreateAppointment } from './create-appointment';
import { Appointment } from '../entities/appointments';
import { getFutureDate } from '../../tests/utils/get-future-date';

describe('Create Appointment', () => {
   it('should be able to create an appointment', () => {
      const startsAt = getFutureDate('2023-10-10');
      const endsAt = getFutureDate('2023-10-11');
      
      const sut = new CreateAppointment();

      expect(sut.execute({
         customer: 'Jhon Doe',
         startsAt,
         endsAt
      })).resolves.toBeInstanceOf(Appointment);
   })
});