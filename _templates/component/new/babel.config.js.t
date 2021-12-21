---
to: packages/<%= h.changeCase.param(name) %>/babel.config.js
---
module.exports = {
  ...require('../../babel.config.js'),
}
