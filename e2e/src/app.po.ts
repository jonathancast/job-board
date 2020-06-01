import { browser, by, element } from 'protractor';

export class AppPage {
    navigateTo(): Promise<unknown> {
        return browser.get(browser.baseUrl) as Promise<unknown>;
    }

    getTitleText(): Promise<string> {
        cont content = element(by.css('app-root .content')).getText() as Promise<string>;
        console.log(content);
        return content;
    }
}
