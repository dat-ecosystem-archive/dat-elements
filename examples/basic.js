var Loader = require('../loader')
var Sprite = require('../sprite')
var Icon = require('../icon')
var css = require('sheetify')

var prefix = css`:host { color: blue }`

// load the SVG sprite containing all icons onto the DOM
var sprite = Sprite()
document.body.appendChild(sprite)

// select an icon from the sprite!
var icon = Icon('happy-dat')
document.body.appendChild(icon)

// create a loader element
var loader = Loader({ class: prefix })
document.body.appendChild(loader)
