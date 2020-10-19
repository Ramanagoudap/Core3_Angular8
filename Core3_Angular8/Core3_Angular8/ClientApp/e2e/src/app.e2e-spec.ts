// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================

import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display application title: Core3_Angular8', () => {
    page.navigateTo();
    expect(page.getAppTitle()).toEqual('Core3_Angular8');
  });
});
