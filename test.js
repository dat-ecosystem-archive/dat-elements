const test = require('tape')
const datElements = require('./')

test('should assert input types', function (t) {
  t.plan(1)
  t.throws(datElements)
})
