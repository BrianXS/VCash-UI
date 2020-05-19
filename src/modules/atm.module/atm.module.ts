import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app.module/shared/modules/app.routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {DataTablesModule} from 'angular-datatables';
import {AtmTableComponent} from './atm.table.component/atm.table.component';
import {AtmService} from './shared/services/atm.service';

@NgModule({
  declarations: [
    AtmTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    DataTablesModule
  ],
  exports: [],
  providers: [AtmService]
})
export class AtmModule {
}
