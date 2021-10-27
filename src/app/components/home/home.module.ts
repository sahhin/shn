import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { LayoutComponent } from './layout/layout.component';
import { LandingComponent } from './pages/landing/landing.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    HomeComponent,
    ToolbarComponent,
    LayoutComponent,
    LandingComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    FontAwesomeModule
  ],
  exports: [
      HomeComponent
  ]
})
export class HomeModule { }
