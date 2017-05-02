import { NgValidateTooltipPage } from './app.po';

describe('ng-validate-tooltip App', () => {
  let page: NgValidateTooltipPage;

  beforeEach(() => {
    page = new NgValidateTooltipPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
