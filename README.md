# dat-elements [![stability][0]][1]
[![npm version][2]][3] [![build status][4]][5]
[![downloads][8]][9] [![js-standard-style][10]][11]

Dat UI elements.

## Usage
```js
var Loader = require('dat-elements/loader')
var Sprite = require('dat-elements/sprite')
var Icon = require('dat-elements/icon')

// load the SVG sprite containing all icons onto the DOM
var sprite = Sprite()
document.body.appendChild(sprite)

// select an icon from the sprite!
var icon = Icon('happy-dat')
document.body.appendChild(icon)

// create a loader element
var loader = Loader()
document.body.appendChild(loader)
```

## API
### `loader = Loader()`
Create a smooth, pulsating loader.

### `sprite = Sprite()`
Create a new SVG sprite that must be loaded onto the DOM as the first child
element. Allows the icon element to work.

### `icon = Icon(iconName, [options])`
Create a new icon element, referencing an icon from the sprite.

## Installation
```sh
$ npm install dat-elements
```

## See Also
- [dat-icons](https://github.com/Kriesse/dat-icons)

## License
[MIT](https://tldrlegal.com/license/mit-license)

[0]: https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square
[1]: https://nodejs.org/api/documentation.html#documentation_stability_index
[2]: https://img.shields.io/npm/v/dat-elements.svg?style=flat-square
[3]: https://npmjs.org/package/dat-elements
[4]: https://img.shields.io/travis/datproject/dat-elements/master.svg?style=flat-square
[5]: https://travis-ci.org/datproject/dat-elements
[6]: https://img.shields.io/codecov/c/github/datproject/dat-elements/master.svg?style=flat-square
[7]: https://codecov.io/github/datproject/dat-elements
[8]: http://img.shields.io/npm/dm/dat-elements.svg?style=flat-square
[9]: https://npmjs.org/package/dat-elements
[10]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[11]: https://github.com/feross/standard
