const avatar = require('../avatar')
const mount = require('choo/mount')
const css = require('sheetify')
const html = require('bel')

css('tachyons')

const els = [
  el('avatar', avatar({ src: 'http://lorempixel.com/64/64/cats', size: 3 }))
]

const tree = html`
  <body class="w-100 sans-serif">
    <main class="mh3 pt2-l ph5">
      <div class="cf">
        ${els}
      </div>
    </main>
  </body>
`
mount('body', tree)

// create a new el
// (str, obj) -> obj
function el (name, el) {
  return html`
    <section class="fl w-100 w-50-m w-25-l pr4 pt4">
      <h2 class="f3">${name}</h2>
      ${el}
    </section>
  `
}
