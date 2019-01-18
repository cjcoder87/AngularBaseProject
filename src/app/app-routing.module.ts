import { Scenario1Component } from './shared/components/scenario1/scenario1.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FieldsComponent } from './shared/components/fields/fields.component';

const routes: Routes = [
  {
    path: 'field',
    component: FieldsComponent
  },
  {
    path: 'scenarioAdd',
    component: Scenario1Component
  },
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
