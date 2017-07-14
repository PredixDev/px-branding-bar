describe('px-branding-bar default look & behaviour', function () {
  it('fixture should exist', function() {
    var brandingBarEl = fixture('PxBrandingBarFixture');
    expect(brandingBarEl).to.exist;
  });

  it('element name should be correct', function() {
    var brandingBarEl = fixture('PxBrandingBarFixture');
    expect(brandingBarEl.tagName).to.equal('PX-BRANDING-BAR');
  });

  it('branding bar should have a GE logo by default', function() {
    var brandingBarEl = fixture('PxBrandingBarFixture');
    var geLogo = Polymer.dom(brandingBarEl.root).querySelector('px-ge-svg-logo');
    expect(geLogo).to.exist;
  });

  it('branding bar property should have default title of document.title', function() {
    var brandingBarEl = fixture('PxBrandingBarFixture');
    expect(brandingBarEl.applicationTitle).to.equal(document.title);
  });

  it('branding bar should display default title of document.title', function() {
    var brandingBarEl = fixture('PxBrandingBarFixture');
    var titleEl = Polymer.dom(brandingBarEl.root).querySelector('label');
    expect(titleEl.textContent).to.equal(document.title);
  });

});

describe('px-branding-bar attributes setting', function () {

  it('setting application-title attribute should change displayed title', function() {
    var brandingBarEl = fixture('PxBrandingBarSetPropertiesFixture');
    expect(brandingBarEl.applicationTitle).to.equal('Moar Predix Please');
  });

});

describe('px-branding-bar custom slot content', function () {

  it('setting title slot should change title property', function() {
    var brandingBarEl = fixture('PxBrandingBarCustomContentFixture');
    flush(function(done){
      expect(brandingBarEl.applicationTitle).to.equal('Moar Predix Please');
      done();
    });
  });

  it('setting title slot should change displayed title', function() {
    var brandingBarEl = fixture('PxBrandingBarCustomContentFixture');
    flush(function(done){
      var titleEl = Polymer.dom(brandingBarEl.root).querySelector('label');
      expect(titleEl.textContent).to.equal('Moar Predix Please');
      done();
    });
  });

  it('setting logo slot should change displayed logo', function() {
    var brandingBarEl = fixture('PxBrandingBarCustomContentFixture');
    flush(function(done){
      var logoEl = Polymer.dom(brandingBarEl).querySelector('circle');
      expect(logoEl).exists();
      expect(logoEl.tagName).to.equal('CIRCLE');

      done();
    });
  });

});
