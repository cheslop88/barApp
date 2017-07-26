import { BarAppPage } from './app.po';

describe('bar-app App', () => {
  let page: BarAppPage;

  beforeEach(() => {
    page = new BarAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
