var expect = require('chai').expect;

describe('random-semver: ', function () {

  var randomSemver = require('../../');

  it('common', function () {

    var count = 100;

    while (count--) {

      expect(randomSemver()).to.be.match(/^[1-9]\.[1-9]\.[1-9]$/);

      expect(randomSemver({ range: '=' })).to.be.match(/^=[1-9]\.[1-9]\.[1-9]$/);
      expect(randomSemver({ range: true })).to.be.match(/^([\^~<>=]|(>=)|(<=))[1-9]\.[1-9]\.[1-9]$/);

      expect(randomSemver({ preRelease: '-dev' })).to.be.match(/^[1-9]\.[1-9]\.[1-9]-dev$/);
      expect(randomSemver({ preRelease: true })).to.be.match(/^[1-9]\.[1-9]\.[1-9]-((dev)|(beta)|(alpha))$/);
    }
  });
});
