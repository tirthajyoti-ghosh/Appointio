import getAllApartmentsByType from '../../API/getAllApartmentsByType';

describe('getAllApartmentsByType', () => {
  test('returns an array of objects with properties id, address, rent', async () => {
    await getAllApartmentsByType(1)
      .then(
        response => {
          expect(Array.isArray(response)).toEqual(true);
          expect(response[0]).toHaveProperty('id');
          expect(response[1]).toHaveProperty('address');
          expect(response[1]).toHaveProperty('rent');
        },
      );
  });
});
