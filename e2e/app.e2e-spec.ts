import { AaaPage } from './app.po';

describe('aaa App', function() {
  let page: AaaPage;

  beforeEach(() => {
    page = new AaaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
