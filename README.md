# random-semver

> Return a random version.


[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/mock-end/random-semver/blob/master/LICENSE)
  
[![build:?](https://img.shields.io/travis/mock-end/random-semver/master.svg?style=flat-square)](https://travis-ci.org/mock-end/random-semver)
[![coverage:?](https://img.shields.io/coveralls/mock-end/random-semver/master.svg?style=flat-square)](https://coveralls.io/github/mock-end/random-semver)
  
  
## Install
  
```
$ npm install --save random-semver 
```
  
## Usage
  
```js
var randomVersion = require('random-semver');
  
// API
// - randomVersion([options]);
  
// options
// - range
// - preRelease
```

By default, returns a version like this:
  
```js
randomVersion();
// => '1.0.1'
```

Optionally specify range:

```js
randomVersion({ range: '>' });
// => '>3.8.6'

randomVersion({ range: true });
// => '~2.5.1'
```

Optionally specify preRelease:  

```js
randomVersion({ preRelease: '-dev' });
// => '4.8.6-dev'

randomVersion({ preRelease: true });
// => '2.5.1-beta'
```  
  
## Related
  
- [random-uuid](https://github.com/mock-end/random-uuid) - Return a random uuid.
- [random-identity](https://github.com/mock-end/random-identity) - Return a random ID.
- [random-dx](https://github.com/mock-end/random-dx) - Return a value equal to the roll of a die.
- [random-hexhash](https://github.com/mock-end/random-hexhash) - Return a random hex hash.
- [random-normal](https://github.com/mock-end/random-normal) - Return a normally-distributed random variate.
- [random-rpg](https://github.com/mock-end/random-rpg) - Return an array of dice values.
- [random-file](https://github.com/mock-end/random-file) - Return a random file name with random extension.
  

## Contributing
  
Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/mock-end/random-semver/issues/new).
