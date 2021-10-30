import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {fadeInOut} from './core/animations/route.animations';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations:[fadeInOut]
})
export class AppComponent {
    private langs = ['en', 'de', 'tr'];

    constructor(public translate: TranslateService) {
        translate.addLangs(this.langs);
        translate.setDefaultLang('en');

        if (localStorage.getItem('lang') !== null && this.isSupportedLanguage(localStorage.getItem('lang'))) {
            translate.use(<string> localStorage.getItem('lang'));
        } else {
            translate.use('en');
            localStorage.setItem('lang', 'en');
        }
    }

    private isSupportedLanguage(lang: string | null): boolean {
        switch (lang) {
            case 'de':
            case 'en':
            case 'tr':
                return true;
            default:
                return false;
        }
    }
}
