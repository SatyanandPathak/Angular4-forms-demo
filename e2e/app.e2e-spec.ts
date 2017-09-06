import { FormsDemoPage } from './app.po';

describe('forms-demo App', () => {
  let page: FormsDemoPage;

  beforeEach(() => {
    page = new FormsDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
