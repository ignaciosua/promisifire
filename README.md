### Callbacks to promises

A helper library to transform any callback into promise

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
    parameters: [options, "success", "error"]
    };
    // now you can call promisifire and you will get a promise!
    return promisifire(config);
  }

```
