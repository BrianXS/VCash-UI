import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app.module/shared/modules/app.routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DataTablesModule} from 'angular-datatables';
import {CashierTableComponent} from './cashier.table.component/cashier.table.component';
import {CashiersService} from './shared/services/cashiers.service';
import {CashierAddComponent} from "./cashier.add.component/cashier.add.component";
import {NgSelectModule} from "@ng-select/ng-select";

@NgModule({
  declarations: [
    CashierTableComponent,
    CashierAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule
  ],
  exports: [],
  providers: [CashiersService]
})
export class CashierModule {
}
