const promisifire = async (config) => {
  return new Promise((resolve, reject) => {
    let onSuccess = (result) => {
      resolve(result);
    };
    let onError = (error) => {
      reject(error);
    };
    if(!config.instance) return reject("promisifire: Missing instance of the function to be executed")
    if(!config.method) return reject("promisifire: Missing the method to be executed")
    if(!config.parameters.success) return reject("promisifire: Missing success parameter")
    if(!config.parameters.error) return reject("promisifire: Missing error parameter")
    if (config.parameters.success) {
      config.parameters.success = onSuccess;
    }
    if (config.parameters.error) {
      config.parameters.error = onError;
    }
    config.method.apply(config.instance,Object.values(config.parameters));
  });
};

module.exports = promisifire