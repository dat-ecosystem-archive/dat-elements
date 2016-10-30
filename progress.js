const baseProgress = require('base-elements/progress')
const css = require('sheetify')
const xtend = require('xtend')

const styles = css('./progress.css')

module.exports = progress

// Dat UI elements
// num, obj? -> html
function progress (value, opts) {
  const args = xtend(opts, {class: styles})
  return baseProgress(value, args)
}
