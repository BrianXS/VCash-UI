import {NgModule} from '@angular/core';
import {DenominationService} from './shared/services/denomination.service';
import {DataTablesModule} from 'angular-datatables';
import {DenominationTableComponent} from './denomination.table.component/denomination.table.component';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app.module/shared/modules/app.routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {DenominationAddComponent} from './denomination.add.component/denomination.add.component';
import {DenominationEditComponent} from './denomination.edit.component/denomination.edit.component';
import {NgSelectModule} from '@ng-select/ng-select';

@NgModule({
  declarations: [
    DenominationAddComponent,
    DenominationTableComponent,
    DenominationEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSelectModule,
    ReactiveFormsModule,
    DataTablesModule
  ],
  exports: [],
  providers: [DenominationService]
})
export class DenominationModule {

}
