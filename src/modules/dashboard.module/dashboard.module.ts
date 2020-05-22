import {NgModule} from '@angular/core';
import {DashboardComponent} from './dashboard.component/dashboard.component';
import {FailureModule} from '../failure.module/failure.module';
import {AppRoutingModule} from '../app.module/shared/modules/app.routing.module';
import {DenominationModule} from '../denomination.module/denomination.module';
import {CountryModule} from '../country.module/country.module';
import {StateModule} from '../state.module/state.module';
import {CityModule} from '../city.module/city.module';
import {BranchModule} from '../branch.module/branch.module';
import {VehicleModule} from '../vehicle.module/vehicle.module';
import {CashierModule} from '../cashier.module/cashier.module';
import {EmployeeModule} from '../employee.module/employee.module';
import {FundModule} from '../fund.module/fund.module';
import {OfficeModule} from '../office.module/office.module';
import {AtmModule} from '../atm.module/atm.module';
import {BatteryModule} from '../battery.module/battery.module';
import {CustomerModule} from '../customer.module/customer.module';
import {DrawerModule} from '../drawer.module/drawer.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    AppRoutingModule,
    FailureModule,
    DenominationModule,
    CountryModule,
    StateModule,
    CityModule,
    BranchModule,
    VehicleModule,
    CashierModule,
    EmployeeModule,
    FundModule,
    OfficeModule,
    AtmModule,
    BatteryModule,
    CustomerModule,
    DrawerModule
  ],
  exports: [DashboardComponent],
  providers: []
})
export class DashboardModule {

}
