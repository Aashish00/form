import { TheBottomCodePage } from './app.po';

describe('the-bottom-code App', function() {
  let page: TheBottomCodePage;

  beforeEach(() => {
    page = new TheBottomCodePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
