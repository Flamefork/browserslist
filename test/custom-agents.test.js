var browserslist = require('../')

var path = require('path')
var fs = require('fs')

var CUSTOM_AGENTS = path.join(__dirname, 'fixtures', 'agents.json')

it('can use custom caniuse data', () => {
  var agents = JSON.parse(fs.readFileSync(CUSTOM_AGENTS))
  browserslist.initWithAgents(agents)

  expect(browserslist('last 2 versions'))
    .toEqual(['chrome 57', 'chrome 56', 'firefox 52', 'firefox 51'])
})
