var Sprite = require('./sprite')
var Icon = require('./icon')

// load the SVG sprite containing all icons onto the DOM
var sprite = Sprite()
document.body.appendChild(sprite)

// select an icon from the sprite!
var icon = Icon('happy-dat')
document.body.appendChild(icon)
