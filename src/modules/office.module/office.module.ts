import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app.module/shared/modules/app.routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {DataTablesModule} from 'angular-datatables';
import {OfficeTableComponent} from './office.table.component/office.table.component';
import {OfficeService} from './shared/services/office.service';

@NgModule({
  declarations: [
    OfficeTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    DataTablesModule
  ],
  exports: [],
  providers: [OfficeService]
})
export class OfficeModule {
}
