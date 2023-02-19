const RegisteredUser = require('../RegisteredUser');

describe('registered user entity', () => {
  it('harus error jika diberikan data kurang lengkap', () => {
    // Arrange
    const payload = {
      username: 'Dicoding',
      fullname: 'Dicoding Indoneias',
    };
    // Action
    expect(() => new RegisteredUser(payload)).toThrowError('REGISTERED_USER.NOT_CONTAIN_NEEDED_PROPERTY');
  });
  it('harus error jika diberikan data tidak sesuai misal dikasih integer', () => {
    // Percobaan
    // Arange
    const payload = {
      id: 1231,
      username: 'Kirun',
      fullname: 'Ganteng Sekali',
    };
    expect(() => new RegisteredUser(payload)).toThrowError('REGISTERED_USER.NOT_MEET_DATA_TYPE_SPECIFICATION');
  });
  it('benar jika diberikan data sesuai', () => {
    // Arange
    const payload = {
      id: 'user-123',
      username: 'kirunwong',
      fullname: 'kirunwong ganteng',
    };

    // Action and expect
    const result = new RegisteredUser(payload);
    expect(result.username).toEqual(payload.username);
    expect(result.id).toEqual(payload.id);
    expect(result.fullname).toEqual(payload.fullname);
  });
});
