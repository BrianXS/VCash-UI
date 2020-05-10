import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app.module/shared/modules/app.routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {DataTablesModule} from 'angular-datatables';
import {FundTableComponent} from './vehicle.table.component/fund.table.component';
import {FundService} from './shared/services/fund.service';

@NgModule({
  declarations: [
    FundTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    DataTablesModule
  ],
  exports: [],
  providers: [FundService]
})
export class FundModule {
}
