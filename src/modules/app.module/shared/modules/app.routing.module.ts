import {NgModule} from '@angular/core';
import {Route, Router, RouterModule, Routes} from '@angular/router';
import {LoginComponent} from '../../../login.module/login.component/login.component';
import {DashboardComponent} from '../../../dashboard.module/dashboard.component/dashboard.component';
import {FailureTableComponent} from '../../../failure.module/failure.table.component/failure.table.component';
import {FailureFormComponent} from '../../../failure.module/failure.form.component/failure.form.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'home', component: DashboardComponent, children: [
      {path: 'failures', component: FailureTableComponent},
      {path: 'failures/add', component: FailureFormComponent}
  ]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
