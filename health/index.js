var assert = require('assert')
var css = require('sheetify')
var html = require('bel')
var prettyBytes = require('pretty-bytes')
var circle = require('./circle')

css('tachyons')
var prefix = css`
  :host {
  }
`

module.exports = healthElement

function healthElement (health, opts) {
  opts = opts || {}

  assert.equal(typeof health, 'object', 'elements/health: archive should be type object')
  assert.equal(typeof opts, 'object', 'elements/icon: opts should be type object')

  var classNames = opts.class
    ? prefix + ' ' + opts.class
    : prefix

  if (!health) return ''
  var completedPeers = health.peers.filter(peer => {
    return peer.have === peer.blocks
  })
  var peers = health.peers.sort((a, b) => {
    return parseFloat(a.have) - parseFloat(b.have)
  })

  return html`
  <div class=${classNames}>
    <article class="cf ph1">
      <div class="fl w-100 w-40-ns pl5">
        <dl class="dib w-40 lh-title">
          <dd class="f6 fw4 ml0">Total Peers</dd>
          <dd class="f2 f-subheadline-l fw6 ml0">${peers.length}</dd>
        </dl>
        <dl class="dib w-40 lh-title">
          <dd class="f6 fw4 ml0">Completed Peers</dd>
          <dd class="f2 f-subheadline-l fw6 ml0">${completedPeers.length}</dd>
        </dl>
        <dl class="db w-auto-l lh-title">
          <dd class="f6 fw4 ml0">Total Size</dd>
          <dd class="f2 f-subheadline-l fw6 ml0">${prettyBytes(health.bytes)}</dd>
        </dl>
        <dl class="db w-auto-l lh-title">
          <dd class="f6 fw4 ml0">Blocks</dd>
          <dd class="f2 f-subheadline-l fw6 ml0">${health.blocks}</dd>
        </dl>
      </div>
      <div class="fl w-100 w-60-ns tc">
        ${health.peers.map((peer, i) => {
          return circle(peer)
        })}
      </div>
    </article>
  </div>
  `
}
