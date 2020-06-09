import {Route, Router, RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {DenominationTableComponent} from '../../../denomination.module/denomination.table.component/denomination.table.component';
import {DrawerRangeTableComponent} from '../../../drawer.range.module/drawer.range.table.component/drawer.range.table.component';
import {DenominationAddComponent} from '../../../denomination.module/denomination.add.component/denomination.add.component';
import {DenominationEditComponent} from '../../../denomination.module/denomination.edit.component/denomination.edit.component';
import {DrawerRangeAddComponent} from '../../../drawer.range.module/drawer.range.add.component/drawer.range.add.component';
import {EmployeeTableComponent} from '../../../employee.module/employee.table.component/employee.table.component';
import {CustomerTableComponent} from '../../../customer.module/customer.table.component/customer.table.component';
import {FailureTableComponent} from '../../../failure.module/failure.table.component/failure.table.component';
import {CountryTableComponent} from '../../../country.module/country.table.component/country.table.component';
import {VehicleTableComponent} from '../../../vehicle.module/vehicle.table.component/vehicle.table.component';
import {CashierTableComponent} from '../../../cashier.module/cashier.table.component/cashier.table.component';
import {BatteryTableComponent} from '../../../battery.module/battery.table.component/battery.table.component';
import {CustomerAddComponent} from '../../../customer.module/customer.add.component/customer.add.component';
import {CountryAddComponent} from '../../../country.module/country.add.component/country.add.component';
import {FailureAddComponent} from '../../../failure.module/failure.add.component/failure.add.component';
import {CountryEditComponent} from '../../../country.module/country.edit.component/country.edit.component';
import {FailureEditComponent} from '../../../failure.module/failure.edit.component/failure.edit.component';
import {BranchTableComponent} from '../../../branch.module/branch.table.component/branch.table.component';
import {DrawerTableComponent} from '../../../drawer.module/drawer.table.component/drawer.table.component';
import {OfficeTableComponent} from '../../../office.module/office.table.component/office.table.component';
import {VehicleAddComponent} from '../../../vehicle.module/vehicle.add.component/vehicle.add.component';
import {CashierAddComponent} from '../../../cashier.module/cashier.add.component/cashier.add.component';
import {BatteryAddComponent} from '../../../battery.module/battery.add.component/battery.add.component';
import {BranchAddComponent} from '../../../branch.module/branch.add.component/branch.add.component';
import {BranchEditComponent} from '../../../branch.module/branch.edit.component/branch.edit.component';
import {StateTableComponent} from '../../../state.module/state.table.component/state.table.component';
import {DashboardComponent} from '../../../dashboard.module/dashboard.component/dashboard.component';
import {DrawerAddComponent} from '../../../drawer.module/drawer.add.component/drawer.add.component';
import {OfficeAddComponent} from '../../../office.module/office.add.component/office.add.component';
import {StateEditComponent} from '../../../state.module/state.edit.component/state.edit.component';
import {StateAddComponent} from '../../../state.module/state.add.component/state.add.component';
import {FundTableComponent} from '../../../fund.module/fund.table.component/fund.table.component';
import {CityTableComponent} from '../../../city.module/city.table.component/city.table.component';
import {CityEditComponent} from '../../../city.module/city.edit.component/city.edit.component';
import {CityAddComponent} from '../../../city.module/city.add.component/city.add.component';
import {AtmTableComponent} from '../../../atm.module/atm.table.component/atm.table.component';
import {FundAddComponent} from '../../../fund.module/fund.add.component/fund.add.component';
import {AtmAddComponent} from '../../../atm.module/atm.add.component/atm.add.component';
import {LoginComponent} from '../../../login.module/login.component/login.component';
import {AtmEditComponent} from '../../../atm.module/atm.edit.component/atm.edit.component';
import {BatteryEditComponent} from '../../../battery.module/battery.edit.component/battery.edit.component';
import {CashierEditComponent} from '../../../cashier.module/cashier.edit.component/cashier.edit.component';
import {VehicleEditComponent} from '../../../vehicle.module/vehicle.edit.component/vehicle.edit.component';
import {OfficeEditComponent} from '../../../office.module/office.edit.component/office.edit.component';
import {CustomerEditComponent} from '../../../customer.module/customer.edit.component/customer.edit.component';
import {DrawerEditComponent} from '../../../drawer.module/drawer.edit.component/drawer.edit.component';
import {DrawerRangeEditComponent} from '../../../drawer.range.module/drawer.range.edit.component/drawer.range.edit.component';
import {FundEditComponent} from '../../../fund.module/fund.edit.component/fund.edit.component';
import {EmployeeAddComponent} from '../../../employee.module/employee.add.component/employee.add.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'home', component: DashboardComponent, children: [
      {path: 'failures', component: FailureTableComponent},
      {path: 'failures/add', component: FailureAddComponent},
      {path: 'failures/edit/:id', component: FailureEditComponent},

      {path: 'denominations', component: DenominationTableComponent},
      {path: 'denominations/add', component: DenominationAddComponent},
      {path: 'denominations/edit/:id', component: DenominationEditComponent},

      {path: 'countries', component: CountryTableComponent},
      {path: 'countries/add', component: CountryAddComponent},
      {path: 'countries/edit/:id', component: CountryEditComponent},

      {path: 'states', component: StateTableComponent},
      {path: 'states/add', component: StateAddComponent},
      {path: 'states/edit/:id', component: StateEditComponent},

      {path: 'cities', component: CityTableComponent},
      {path: 'cities/add', component: CityAddComponent},
      {path: 'cities/edit/:id', component: CityEditComponent},

      {path: 'branches', component: BranchTableComponent},
      {path: 'branches/add', component: BranchAddComponent},
      {path: 'branches/edit/:id', component: BranchEditComponent},

      {path: 'vehicles', component: VehicleTableComponent},
      {path: 'vehicles/add', component: VehicleAddComponent},
      {path: 'vehicles/edit/:id', component: VehicleEditComponent},

      {path: 'employees', component: EmployeeTableComponent},
      {path: 'employees/add', component: EmployeeAddComponent},

      {path: 'cashiers', component: CashierTableComponent},
      {path: 'cashiers/add', component: CashierAddComponent},
      {path: 'cashiers/edit/:id', component: CashierEditComponent},

      {path: 'funds', component: FundTableComponent},
      {path: 'funds/add', component: FundAddComponent},
      {path: 'funds/edit/:customerId/:officeId', component: FundEditComponent},

      {path: 'offices', component: OfficeTableComponent},
      {path: 'offices/add', component: OfficeAddComponent},
      {path: 'offices/edit/:id', component: OfficeEditComponent},

      {path: 'atms', component: AtmTableComponent},
      {path: 'atms/add', component: AtmAddComponent},
      {path: 'atms/edit/:id', component: AtmEditComponent},

      {path: 'atm-batteries', component: BatteryTableComponent},
      {path: 'atm-batteries/add', component: BatteryAddComponent},
      {path: 'atm-batteries/edit/:id', component: BatteryEditComponent},

      {path: 'customers', component: CustomerTableComponent},
      {path: 'customers/add', component: CustomerAddComponent},
      {path: 'customers/edit/:id', component: CustomerEditComponent},

      {path: 'drawers', component: DrawerTableComponent},
      {path: 'drawers/add', component: DrawerAddComponent},
      {path: 'drawers/edit/:id', component: DrawerEditComponent},

      {path: 'drawers-and-ranges', component: DrawerRangeTableComponent},
      {path: 'drawers-and-ranges/add', component: DrawerRangeAddComponent},
      {path: 'drawers-and-ranges/edit/:id', component: DrawerRangeEditComponent}
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
