### Promise to GO

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
    // ordered parameters this method will receive
    parameters: {
      options: options,
      success: true,
      error: true,
      }
    };
    // now you can call promisifire and you will get a promise!
    return promisifire(config);
  }

```