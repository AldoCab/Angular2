import { AngularCliPrimerProyectoPage } from './app.po';

describe('angular-cli-primer-proyecto App', function() {
  let page: AngularCliPrimerProyectoPage;

  beforeEach(() => {
    page = new AngularCliPrimerProyectoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
