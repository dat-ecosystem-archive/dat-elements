const baseAvatar = require('base-elements/avatar')
const css = require('sheetify')

const styles = css('./avatar.css')

module.exports = avatar

console.log(styles)

// Dat UI elements
// null -> null
function avatar (opts) {
  return baseAvatar({ style: styles })
}
