const base = require('base-elements')
const css = require('sheetify')

const styles = css('./progress.css')

module.exports = progress

// Dat UI elements
// null -> null
function progress (opts) {
  return base.progress({ style: styles })
}
