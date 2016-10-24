const base = require('base-elements')
const css = require('sheetify')

const styles = css('./avatar.css')

module.exports = avatar

console.log(styles)

// Dat UI elements
// null -> null
function avatar (opts) {
  return base.avatar({ style: styles })
}
