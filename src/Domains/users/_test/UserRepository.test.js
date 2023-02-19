const UserRepository = require('../UserRepository');

describe('Userrepository interface', () => {
  it('akan membangkitkan error jika mengakses method di class abstract ini', async () => {
    // Arange
    const userRepository = new UserRepository();
    await expect(userRepository.addUser({})).rejects.toThrowError('USER_REPOSITORY.METHOD_NOT_IMPLEMENTED');
    await expect(userRepository.verifyAvailableUsername('')).rejects.toThrowError('USER_REPOSITORY.METHOD_NOT_IMPLEMENTED');
  });
});
