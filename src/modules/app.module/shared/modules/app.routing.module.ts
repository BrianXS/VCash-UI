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
import {CountryEditComponent} from '../../../country.module/country.edit.component/country.edit.component';
import {StateEditComponent} from '../../../state.module/state.edit.component/state.edit.component';
import {CityEditComponent} from '../../../city.module/city.edit.component/city.edit.component';
import {BranchEditComponent} from '../../../branch.module/branch.edit.component/branch.edit.component';
import {FailureEditComponent} from '../../../failure.module/failure.edit.component/failure.edit.component';
import {DenominationEditComponent} from '../../../denomination.module/denomination.edit.component/denomination.edit.component';
import {VehicleTableComponent} from '../../../vehicle.module/vehicle.table.component/vehicle.table.component';
import {CashierTableComponent} from '../../../cashier.module/cashier.table.component/cashier.table.component';
import {EmployeeTableComponent} from '../../../employee.module/employee.table.component/employee.table.component';
import {FundTableComponent} from '../../../fund.module/fund.table.component/fund.table.component';
import {OfficeTableComponent} from "../../../office.module/office.table.component/office.table.component";
import {AtmTableComponent} from "../../../atm.module/atm.table.component/atm.table.component";

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'home', component: DashboardComponent, children: [
      {path: 'failures', component: FailureTableComponent},
      {path: 'failures/add', component: FailureFormComponent},
      {path: 'failures/edit/:id', component: FailureEditComponent},
      {path: 'denominations', component: DenominationTableComponent},
      {path: 'denominations/add', component: DenominationFormComponent},
      {path: 'denominations/edit/:id', component: DenominationEditComponent},
      {path: 'countries', component: CountryTableComponent},
      {path: 'countries/add', component: CountryFormComponent},
      {path: 'countries/edit/:id', component: CountryEditComponent},
      {path: 'states', component: StateTableComponent},
      {path: 'states/add', component: StateFormComponent},
      {path: 'states/edit/:id', component: StateEditComponent},
      {path: 'cities', component: CityTableComponent},
      {path: 'cities/add', component: CityFormComponent},
      {path: 'cities/edit/:id', component: CityEditComponent},
      {path: 'branches', component: BranchTableComponent},
      {path: 'branches/add', component: BranchFormComponent},
      {path: 'branches/edit/:id', component: BranchEditComponent},
      {path: 'customers', component: VehicleTableComponent},
      {path: 'employees', component: EmployeeTableComponent},
      {path: 'cashiers', component: CashierTableComponent},
      {path: 'funds', component: FundTableComponent},
      {path: 'offices', component: OfficeTableComponent},
      {path: 'atms', component: AtmTableComponent}
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
