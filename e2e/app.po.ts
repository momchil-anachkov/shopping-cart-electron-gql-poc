import { browser, element, by } from 'protractor/built';

/* tslint:disable */
export class AngularElectronPage {
  navigateTo(route: string) {
    return browser.get(route);
  }
}
