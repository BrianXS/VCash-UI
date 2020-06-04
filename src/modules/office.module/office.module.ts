import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app.module/shared/modules/app.routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DataTablesModule} from 'angular-datatables';
import {OfficeTableComponent} from './office.table.component/office.table.component';
import {OfficeService} from './shared/services/office.service';
import {OfficeAddComponent} from './office.add.component/office.add.component';
import {NgSelectModule} from '@ng-select/ng-select';
import {OfficeEditComponent} from './office.edit.component/office.edit.component';

@NgModule({
  declarations: [
    OfficeTableComponent,
    OfficeAddComponent,
    OfficeEditComponent
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
  providers: [OfficeService]
})
export class OfficeModule {
}
