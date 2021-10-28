import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SettingsComponent} from './components/home/pages/settings/settings.component';
import {HomeComponent} from './components/home/home.component';
import {LandingComponent} from './components/home/pages/landing/landing.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
