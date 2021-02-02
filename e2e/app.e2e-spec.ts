import { LiuxiangtaoTestPage } from './app.po';

describe('liuxiangtao-test App', () => {
  let page: LiuxiangtaoTestPage;

  beforeEach(() => {
    page = new LiuxiangtaoTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
