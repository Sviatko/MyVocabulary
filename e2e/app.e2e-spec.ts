import { Vocab1Page } from './app.po';

describe('vocab1 App', () => {
  let page: Vocab1Page;

  beforeEach(() => {
    page = new Vocab1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
