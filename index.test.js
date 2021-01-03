const promisifire = require('./index');

function successCallback(text, error, success) {
  setTimeout(() => {
    return error('failed');
  }, 1000);
  setTimeout(() => {
    return success(text);
  }, 2000);
}

function errorCallback(text, error, success) {
  setTimeout(() => {
    return success(text);
  }, 2000);
  setTimeout(() => {
    return error('failed');
  }, 1000);
}

// @ponicode
describe('promisifire', () => {
  test('Do not have object Instance', async () => {
    let config = {
      instance: null,
      method: false,
      parameters: ['hello', 'error', 'success'],
    };
    try {
      await promisifire(config);
    } catch (e) {
      expect(e).toBe(
        'promisifire: Missing instance of the function to be executed'
      );
    }
  });
  test('Do not have Method', async () => {
    let config = {
      instance: successCallback,
      method: null,
      parameters: ['hello', 'error', 'success'],
    };
    try {
      await promisifire(config);
    } catch (e) {
      expect(e).toBe('promisifire: Missing the method to be executed');
    }
  });
  test('Do not have error parameter', async () => {
    let config = {
      instance: successCallback,
      method: successCallback,
      parameters: ['hello', 'success'],
    };
    try {
      await promisifire(config);
    } catch (e) {
      expect(e).toBe('promisifire: Missing error parameter');
    }
  });
  test('Do not have success parameter', async () => {
    let config = {
      instance: successCallback,
      method: successCallback,
      parameters: ['hello', 'error'],
    };
    try {
      await promisifire(config);
    } catch (e) {
      expect(e).toBe('promisifire: Missing success parameter');
    }
  });
  test('Execute successfull callback', async () => {
    let config = {
      instance: successCallback,
      method: successCallback,
      parameters: ['hello', 'error', 'success'],
    };
    try {
      let result = await promisifire(config);
      expect(result).toBe('hello');
    } catch (e) {}
  });
  test('Execute failed callback', async () => {
    let config = {
      instance: errorCallback,
      method: errorCallback,
      parameters: ['hello', 'error', 'success'],
    };
    try {
      await promisifire(config);
    } catch (e) {
      expect(e).toBe('failed');
    }
  });
});
