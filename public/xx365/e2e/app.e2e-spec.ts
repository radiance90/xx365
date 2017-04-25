import { Xx365Page } from './app.po';

describe('xx365 App', () => {
  let page: Xx365Page;

  beforeEach(() => {
    page = new Xx365Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
