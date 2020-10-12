import login from '../../API/login';

describe('login', () => {
  test('should return an object with logged_in and user properties', () => {
    login('user2@user.com', '123456')
      .then(response => {
        expect(response.data).toHaveProperty('logged_in');
        expect(response.data).toHaveProperty('user');
      });
  });

  test('should return 422 status code and error message', () => {
    login('invalid@user.com', 'wrong_password')
      .then(response => {
        expect(response.status).toEqual(422);
        expect(response.data.message).toEqual('Invalid email/password');
      });
  });
});
