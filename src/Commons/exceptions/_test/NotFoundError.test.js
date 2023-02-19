const NotFoundError = require('../NotFoundError');

describe('NotFoundError', () => {
  it('should create an error correctly', () => {
    const notFoundError = new NotFoundError('Resource not found!');
    expect(notFoundError.statusCode).toEqual(404);
    expect(notFoundError.message).toEqual('Resource not found!');
    expect(notFoundError.name).toEqual('NotFoundError');
  });
});
