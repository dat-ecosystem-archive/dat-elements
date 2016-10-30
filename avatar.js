const baseAvatar = require('base-elements/avatar')
const css = require('sheetify')
const xtend = require('xtend')

const styles = css('./avatar.css')

module.exports = avatar

// Dat UI elements
// (str, obj?) -> html
function avatar (src, opts) {
  const args = xtend(opts, {class: styles})
  return baseAvatar(src, args)
}
