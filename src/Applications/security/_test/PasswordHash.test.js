const PasswordHash = require('../PasswordHash');

describe('Passwordhash interface', () => {
  it('should throw error when invoke abstract behavior', async () => {
  // Arange
    const passwordHash = new PasswordHash();

    // Action
    await expect(passwordHash.hash('dummy_password')).rejects.toThrowError('PASSWORD_HASH.METHOD_NOT_IMPLEMENTED');
  });
});
