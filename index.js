const promisifire = async (config) => {
  return new Promise((resolve, reject) => {
    let onSuccess = (result) => {
      resolve(result);
    };
    let onError = (error) => {
      reject(error);
    };
    if(!config.parameters.success) return reject("promisifire: Missing success parameter")
    if(!config.parameters.error) return reject("promisifire: Missing error parameter")
    if (config.parameters.success) {
      config.success = onSuccess;
    }
    if (config.parameters.error) {
      config.error = onError;
    }
    config.method.apply(config.instance,Object.values(config.parameters));
  });
};

module.exports = promisifire