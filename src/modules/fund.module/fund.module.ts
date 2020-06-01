import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app.module/shared/modules/app.routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {DataTablesModule} from 'angular-datatables';
import {FundTableComponent} from './fund.table.component/fund.table.component';
import {FundService} from './shared/services/fund.service';
import {FundAddComponent} from "./fund.add.component/fund.add.component";
import {NgSelectModule} from "@ng-select/ng-select";

@NgModule({
  declarations: [
    FundTableComponent,
    FundAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSelectModule,
    ReactiveFormsModule,
    DataTablesModule
  ],
  exports: [],
  providers: [FundService]
})
export class FundModule {
}
