import {NgModule} from '@angular/core';
import {DashboardComponent} from './dashboard.component/dashboard.component';
import {FailureModule} from '../failure.module/failure.module';
import {AppRoutingModule} from '../app.module/shared/modules/app.routing.module';
import {DenominationModule} from '../denomination.module/denomination.module';
import {CountryModule} from '../country.module/country.module';
import {StateModule} from '../state.module/state.module';
import {CityModule} from '../city.module/city.module';
import {BranchModule} from '../branch.module/branch.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    AppRoutingModule,
    FailureModule,
    DenominationModule,
    CountryModule,
    StateModule,
    CityModule,
    BranchModule
  ],
  exports: [DashboardComponent],
  providers: []
})
export class DashboardModule {

}
