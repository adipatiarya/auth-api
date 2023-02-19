const RegisterUser = require('../RegisterUser');

describe('a register user entities', () => {
  it('should throw error when payload did not contain needed property', () => {
    // Arrange
    const payload = {
      username: 'abc',
      password: 'abc',
    };

    // Action and assert
    expect(() => new RegisterUser(payload)).toThrowError('REGISTER_USER.NOT_CONTAIN_NEEDED_PROPERTY');
  });
  it('should throw error when payload did not meet data type specification', () => {
    // Arange
    const payload = {
      username: 123,
      password: true,
      fullname: 'Dicoding Indonesia',
    };
    // Action and assert
    expect(() => new RegisterUser(payload)).toThrowError('REGISTER_USER.NOT_MEET_DATA_TYPE_SPECIFICATION');
  });
  it('should throw error when username contains more than 50 character', () => {
    // Arange
    const payload = {
      username: 'abcnkjaamanamanajamanaamanajnsmsasdskkmmnajahsasananasbasasabsamsasbasmasbasasasnasjasjasasmasasasasaasa',
      fullname: 'Dicoding Indonesia',
      password: 'abc',

    };
    expect(() => new RegisterUser(payload)).toThrowError('REGISTER_USER.USERNAME_LIMIT_CHAR');
  });
});
