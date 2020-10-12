import getApartmentDetails from '../../API/getApartmentDetails';

describe('getApartmentDetails', () => {
  test('returns an object with the properties sq_ft, deposit, lease_length', async () => {
    await getApartmentDetails(1)
      .then(
        response => {
          expect(response).toHaveProperty('sq_ft');
          expect(response).toHaveProperty('deposit');
          expect(response).toHaveProperty('lease_length');
          expect(response.lease_length).toMatch(/12 months/);
        },
      );
  });
});
