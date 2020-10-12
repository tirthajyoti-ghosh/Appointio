import register from '../../API/register';

describe('register', () => {
  test('should return an object with status and user properties', () => {
    const random = Math.random() * 1000;

    register(`User${random}`, `user${random}@user.com`, '123456', '123456')
      .then(response => {
        expect(response.data).toHaveProperty('status');
        expect(response.data).toHaveProperty('user');
      });
  });
});
