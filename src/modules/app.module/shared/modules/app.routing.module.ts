import {NgModule} from '@angular/core';
import {Route, Router, RouterModule, Routes} from '@angular/router';
import {LoginComponent} from '../../../login.module/login.component/login.component';
import {DashboardComponent} from '../../../dashboard.module/dashboard.component/dashboard.component';
import {FailureTableComponent} from '../../../failure.module/failure.table.component/failure.table.component';
import {FailureFormComponent} from '../../../failure.module/failure.form.component/failure.form.component';
import {DenominationTableComponent} from '../../../denomination.module/denomination.table.component/denomination.table.component';
import {DenominationFormComponent} from '../../../denomination.module/denomination.form.component/denomination.form.component';
import {CountryTableComponent} from '../../../country.module/country.table.component/country.table.component';
import {CountryFormComponent} from '../../../country.module/country.form.component/country.form.component';
import {CityFormComponent} from '../../../city.module/city.form.component/city.form.component';
import {CityTableComponent} from '../../../city.module/city.table.component/city.table.component';
import {StateTableComponent} from '../../../state.module/state.table.component/state.table.component';
import {StateFormComponent} from '../../../state.module/state.form.component/state.form.component';
import {BranchTableComponent} from '../../../branch.module/branch.table.component/branch.table.component';
import {BranchFormComponent} from '../../../branch.module/branch.form.component/branch.form.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'home', component: DashboardComponent, children: [
      {path: 'failures', component: FailureTableComponent},
      {path: 'failures/add', component: FailureFormComponent},
      {path: 'denominations', component: DenominationTableComponent},
      {path: 'denominations/add', component: DenominationFormComponent},
      {path: 'countries', component: CountryTableComponent},
      {path: 'countries/add', component: CountryFormComponent},
      {path: 'states', component: StateTableComponent},
      {path: 'states/add', component: StateFormComponent},
      {path: 'cities', component: CityTableComponent},
      {path: 'cities/add', component: CityFormComponent},
      {path: 'branches', component: BranchTableComponent},
      {path: 'branches/add', component: BranchFormComponent},
  ]},
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
