var assert = require('assert')
var css = require('sheetify')
var html = require('bel')

var prefix = css`
  :host #p1,
  :host #p2 {
    animation:
      size cubic-bezier(0.165, 0.84, 0.44, 1) 1.8s,
      opacity cubic-bezier(0.3, 0.61, 0.355, 1) 1.8s;
    animation-iteration-count: infinite;
    transform-origin: 50% 50%;
    stroke-opacity: 1;
  }

  :host #p2 {
    animation-delay: -.9s;
  }

  @keyframes size {
    0% { transform: scale(0); }
    100% { transform: scale(1); }
  }

  @keyframes opacity {
    0% { stroke-opacity: 1; }
    100% { stroke-opacity: 0; }
  }
`

module.exports = loader

function loader (opts) {
  opts = opts || {}

  assert.equal(typeof opts, 'object', 'elements/loader: opts should be type object')

  var classNames = opts.class
    ? prefix + ' ' + opts.class
    : prefix

  return html`
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      class="${classNames}">
      <g fill="none" fill-rule="evenodd" stroke-width="5" stroke-linecap="round"
       stroke-linejoin="round">
       <polygon id="p1" points="30 1.9 6 15.95 6 44.05 30 58.1 54 44.05 54 15.95 30 1.9"/>
       <polygon id="p2" points="30 1.9 6 15.95 6 44.05 30 58.1 54 44.05 54 15.95 30 1.9"/>
     </g>
    </svg>
   `
}
