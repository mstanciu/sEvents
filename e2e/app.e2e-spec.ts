import { SEventsPage } from './app.po';

describe('s-events App', () => {
  let page: SEventsPage;

  beforeEach(() => {
    page = new SEventsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
