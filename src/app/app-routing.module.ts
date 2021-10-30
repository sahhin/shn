import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingComponent} from './components/pages/landing/landing.component';
import {SettingsComponent} from './components/pages/settings/settings.component';
import {MeComponent} from './components/pages/me/me.component';
import {PortfolioComponent} from './components/pages/portfolio/portfolio.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: 'me',
    component: MeComponent
  },
  {
    path: 'portfolio',
    component: PortfolioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
