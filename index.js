const base = require('base-elements')
const css = require('sheetify')

const styles = css`
  :host .green {
    border-color: green;
  }

  :host .blue {
    border-color: blue;
  }
`

module.exports = avatar

// Dat UI elements
// null -> null
function avatar (opts) {
  opts = opts || {}

  const theme = opts.theme || 'green'
  return base.avatar({ class: styles + ' ' + theme })
}
