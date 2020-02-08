describe('Tiyatro Günlüğü', () => {
  test('Erişim testi', browser => {
    browser
      .url('https://tiyatrogunlugu.com/')
      .waitForElementVisible('body')
  });
  test('Arama fonksiyonu testi', browser => {

    let searchText = 'haluk bilginer';
    let searchBox = '.search-field';
    let searchButton = '.search-submit';
    let resultDiv = '.page-title';

    browser
      .assert.visible(searchBox)
      .setValue(searchBox, searchText)
      .click(searchButton)
      .assert.containsText(resultDiv, searchText)
      .setWindowSize(768, 1000)
      .saveScreenshot('./screenshots/result.png')
      .end();
  });
});