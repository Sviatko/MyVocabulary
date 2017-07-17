import { ClitestPage } from './app.po';

describe('clitest App', () => {
  let page: ClitestPage;

  beforeEach(() => {
    page = new ClitestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
