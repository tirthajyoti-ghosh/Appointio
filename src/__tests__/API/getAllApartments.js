import getAllApartments from '../../API/getAllApartments';

describe('getAllApartments', () => {
  test('returns an array of objects with properties id, address, images', async () => {
    await getAllApartments()
      .then(
        response => {
          expect(Array.isArray(response)).toEqual(true);
          expect(response[0]).toHaveProperty('id');
          expect(response[1]).toHaveProperty('address');
          expect(response[2]).toHaveProperty('images');
        },
      );
  });
});
