// import AppError from '../../../shared/errors/AppError';

import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import ListProviderMonthAvailabilityService from './ListProviderMonthAvailabilityService';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let listProviderMonthAvailability: ListProviderMonthAvailabilityService;

describe('ListProviderMonthAvailability', () => {
    beforeEach(() => {
        fakeAppointmentsRepository = new FakeAppointmentsRepository();
        listProviderMonthAvailability = new ListProviderMonthAvailabilityService(
            fakeAppointmentsRepository,
        );
    });

    it('should be able to list the month availability from provider', async () => {
        await fakeAppointmentsRepository.create({
            provider_id: 'user',
            user_id: 'user',
            date: new Date(2021, 5, 14, 8, 0, 0),
        });

        await fakeAppointmentsRepository.create({
            provider_id: 'user',
            user_id: 'user',
            date: new Date(2021, 5, 14, 9, 0, 0),
        });

        await fakeAppointmentsRepository.create({
            provider_id: 'user',
            user_id: 'user',
            date: new Date(2021, 5, 14, 10, 0, 0),
        });

        await fakeAppointmentsRepository.create({
            provider_id: 'user',
            user_id: 'user',
            date: new Date(2021, 5, 14, 11, 0, 0),
        });

        await fakeAppointmentsRepository.create({
            provider_id: 'user',
            user_id: 'user',
            date: new Date(2021, 5, 14, 12, 0, 0),
        });

        await fakeAppointmentsRepository.create({
            provider_id: 'user',
            user_id: 'user',
            date: new Date(2021, 5, 14, 13, 0, 0),
        });

        await fakeAppointmentsRepository.create({
            provider_id: 'user',
            user_id: 'user',
            date: new Date(2021, 5, 14, 14, 0, 0),
        });

        await fakeAppointmentsRepository.create({
            provider_id: 'user',
            user_id: 'user',
            date: new Date(2021, 5, 14, 15, 0, 0),
        });

        await fakeAppointmentsRepository.create({
            provider_id: 'user',
            user_id: 'user',
            date: new Date(2021, 5, 14, 16, 0, 0),
        });

        await fakeAppointmentsRepository.create({
            provider_id: 'user',
            user_id: 'user',
            date: new Date(2021, 5, 14, 17, 0, 0),
        });

        await fakeAppointmentsRepository.create({
            provider_id: 'user',
            user_id: 'user',
            date: new Date(2021, 5, 15, 8, 0, 0),
        });

        await fakeAppointmentsRepository.create({
            provider_id: 'user',
            user_id: 'user',
            date: new Date(2021, 7, 14, 8, 0, 0),
        });

        const availability = await listProviderMonthAvailability.execute({
            provider_id: 'user',
            year: 2021,
            month: 6,
        });

        expect(availability).toEqual(
            expect.arrayContaining([
                { day: 13, available: true },
                { day: 14, available: false },
                { day: 15, available: true },
                { day: 16, available: true },
            ]),
        );
    });
});
