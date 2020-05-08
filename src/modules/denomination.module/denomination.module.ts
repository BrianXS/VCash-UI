import {NgModule} from '@angular/core';
import {DenominationService} from './shared/services/denomination.service';
import {DataTablesModule} from 'angular-datatables';
import {DenominationTableComponent} from './denomination.table.component/denomination.table.component';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app.module/shared/modules/app.routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {DenominationFormComponent} from './denomination.form.component/denomination.form.component';
import {DenominationEditComponent} from "./denomination.edit.component/denomination.edit.component";

@NgModule({
  declarations: [
    DenominationTableComponent,
    DenominationFormComponent,
    DenominationEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    DataTablesModule
  ],
  exports: [],
  providers: [DenominationService]
})
export class DenominationModule {

}
