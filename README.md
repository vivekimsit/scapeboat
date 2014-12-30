scapeboat
=========

Toy library for learning nodejs, it escapes and unescapes HTML entities.


## Installation
```shell
  npm install scapeboat --save
```
## Usage
```js
  var scapeboat = require('scapeboat')
      escape = scapeboat.escape,
      unescape = scapeboat.unescape;

  var html = '<h1> Hello World</h1>';

  console.log('Escaped: ', escape(html));
  console.log('Unescaped: ', unescape(escaped(html)));
```
## Tests

  npm test

## Contributing

  Feel free to contrinute :)

## Release History

* 0.1.0 Initial release
