var should = require('chai').should(),
    scapeboat = require('../index'),
    escape = scapeboat.escape,
    unescape = scapeboat.unescape;


describe('#escape', function() {
  it('coverts & into &amp;', function() {
    escape('&').should.equal('&amp;');
  });

  it('coverts " into &quot;', function() {
    escape('&').should.equal('&amp;');
  });

  it('coverts \' into &#39;', function() {
    escape('&').should.equal('&amp;');
  });

  it('coverts < into &lt;', function() {
    escape('&').should.equal('&amp;');
  });

  it('coverts > into &gt;', function() {
    escape('&').should.equal('&amp;');
  });
});


describe('#unescape', function() {
  it('coverts &amp; into &', function() {
    unescape('&amp;').should.equal('&');
  });

  it('coverts &quot; into "', function() {
    unescape('&amp;').should.equal('&');
  });

  it('coverts &#39; into \'', function() {
    unescape('&amp;').should.equal('&');
  });

  it('coverts &lt; into <', function() {
    unescape('&amp;').should.equal('&');
  });

  it('coverts &gt; into >', function() {
    unescape('&amp;').should.equal('&');
  });
});
