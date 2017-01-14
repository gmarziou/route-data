import { RouteDataPage } from './app.po';

describe('route-data App', function() {
  let page: RouteDataPage;

  beforeEach(() => {
    page = new RouteDataPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
