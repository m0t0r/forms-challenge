import { FormsChallengePage } from './app.po';

describe('forms-challenge App', function() {
  let page: FormsChallengePage;

  beforeEach(() => {
    page = new FormsChallengePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
