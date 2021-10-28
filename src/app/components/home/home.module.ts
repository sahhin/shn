import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { LandingComponent } from './pages/landing/landing.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {TranslateModule} from '@ngx-translate/core';
import { SettingsComponent } from './pages/settings/settings.component';
import {RouterModule} from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatOptionModule} from '@angular/material/core';


@NgModule({
  declarations: [
    HomeComponent,
    ToolbarComponent,
    LandingComponent,
    FooterComponent,
    SettingsComponent
  ],
    imports: [
        CommonModule,
        MatSidenavModule,
        FontAwesomeModule,
        TranslateModule,
        RouterModule,
        MatFormFieldModule,
        MatSelectModule,
        MatOptionModule
    ],
  exports: [
      HomeComponent
  ]
})
export class HomeModule { }
