import {NgModule} from '@angular/core';
import {DashboardComponent} from './dashboard.component/dashboard.component';
import {FailureModule} from '../failure.module/failure.module';
import {AppRoutingModule} from '../app.module/shared/modules/app.routing.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [FailureModule, AppRoutingModule],
  exports: [DashboardComponent],
  providers: []
})
export class DashboardModule {

}
