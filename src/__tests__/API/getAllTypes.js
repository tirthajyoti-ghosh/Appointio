import getAllTypes from '../../API/getAllTypes';

describe('getAllTypes', () => {
  test('returns an array of objects with properties id, name', async () => {
    await getAllTypes()
      .then(
        response => {
          expect(Array.isArray(response)).toEqual(true);
          expect(response[3]).toHaveProperty('id');
          expect(response[1]).toHaveProperty('name');
        },
      );
  });
});
