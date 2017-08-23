import { StateIssuePage } from './app.po';

describe('state-issue App', () => {
  let page: StateIssuePage;

  beforeEach(() => {
    page = new StateIssuePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
