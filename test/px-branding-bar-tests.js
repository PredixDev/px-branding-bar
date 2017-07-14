describe('px-branding-bar checked behaviour', function () {
  it('should be unchecked by default', function() {
    var toggleElement = fixture('PxBrandingBarFixture');
    expect(toggleElement).to.exist;
  });

  // it('can be checked by setting property', function() {
  //   var toggleElement = fixture('PxBrandingBarFixture');
  //   assert.isFalse(toggleElement.checked);
  //   toggleElement.checked = true;
  //   assert.isTrue(toggleElement.checked);
  // });
});
