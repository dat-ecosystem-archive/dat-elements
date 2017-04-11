var Health = require('../health')

// Get data via hyperhealth module.
var data = {"connected":4,"bytes":710769,"blocks":7452,"peers":[{"id":"f019d6fe5c0599ed23db565214fddf5b29d2be0d8f8955c6f9653b00a2cf62b8","have":7452,"blocks":7452},{"id":"7415fd7fce3e5a5700f7a94652d636475eb30ddc29a7bb1204f5469c69d5f435","have":1,"blocks":7452},{"id":"25251f436f8bac56aa4e2dccdc707fc3a70b09fac02d4983637d0c268386df4e","have":1138,"blocks":7452},{"id":"e55e7bf8bdcdf81bcc00e2c22dc8327ce8c7e266c3a7b75127f6994fc4c49695","have":4,"blocks":7452}]}

var health = Health(data)
document.body.appendChild(health)
