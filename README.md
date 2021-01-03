### Callbacks to promises

A helper library to transform callbacks into promises

### Repository

[Promise to go repository](https://github.com/ignaciosua/promisifire)

### How to Install

`$ npm install promisifire`

### How to Use

```javascript
import promisifire from 'promisifire'

//your custom async  method that will return a promise 
  async function MyCustomFunction() {
    //Pass your config object
    let config = {
    // Instance of the method your are going to call
    instance: yourInstance,
    // Mehod you want to call
    method: yourInstance.method,
    // pass parameters ordered exaclty how your function is expecting
    parameters: {
      //This will be the position of your options variable
      options: options,
      //This will be the position of your success callback
      success: true,
      //This will be the position of your error callback
      error: true,
      }
    };
    // now you can call promisifire and you will get a promise!
    return promisifire(config);
  }

```