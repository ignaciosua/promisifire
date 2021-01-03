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
    if(!config.parameters && config.parameters.indexOf("success") < 0) return reject("promisifire: Missing success parameter")
    if(!config.parameters && config.parameters.indexOf("error") < 0) return reject("promisifire: Missing error parameter")
    config.parameters[config.parameters.indexOf('success')] = onSuccess;
    config.parameters[config.parameters.indexOf('error')] = onError;
    config.method.apply(config.instance,config.parameters);
  });
};

module.exports = promisifire