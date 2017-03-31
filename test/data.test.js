var browserslist = require('../');
var customData = require('./fixtures/data-custom.json');

it('can use custom caniuse data', () => {
    browserslist.initWithData(customData);
    expect(browserslist('last 2 versions'))
        .toEqual(['chrome 57', 'chrome 56', 'firefox 52', 'firefox 51']);
});
