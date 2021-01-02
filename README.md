### Promise to GO

A helper library to transform callbacks into promises

### Repository

[Promise to go repository](https://github.com/ignaciosua/promisifire)

### How to Install

`$ npm install promisifire`

### How to Use

```javascript
import promisifire from 'promisifire'

  async function MyCustomFunction() {
    let config = {
    instance: yourInstance,
    method: yourInstance.method,
    parameters: {
      options: options,
      success: true,
      error: true,
      }
    } ;
    return promisifire(config);
  }

```