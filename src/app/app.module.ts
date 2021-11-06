import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {CommonModule} from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {RouterModule} from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatOptionModule} from '@angular/material/core';
import {ToolbarComponent} from './components/toolbar/toolbar.component';
import {LandingComponent} from './components/pages/landing/landing.component';
import {FooterComponent} from './components/footer/footer.component';
import {MeComponent} from './components/pages/me/me.component';
import {SettingsComponent} from './components/pages/settings/settings.component';
import {PortfolioComponent} from './components/pages/portfolio/portfolio.component';
import {NgxUsefulSwiperModule} from 'ngx-useful-swiper';
import {MatButtonModule} from '@angular/material/button';
import {NgxPopperjsModule} from 'ngx-popperjs';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
    declarations: [
        AppComponent,
        ToolbarComponent,
        LandingComponent,
        FooterComponent,
        SettingsComponent,
        MeComponent,
        PortfolioComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        CommonModule,
        MatSidenavModule,
        FontAwesomeModule,
        NgxUsefulSwiperModule,
        TranslateModule,
        RouterModule,
        MatFormFieldModule,
        MatSelectModule,
        MatOptionModule,
        NgxPopperjsModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        MatButtonModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
