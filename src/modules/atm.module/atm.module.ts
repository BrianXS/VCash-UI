import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app.module/shared/modules/app.routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {DataTablesModule} from 'angular-datatables';
import {AtmTableComponent} from './atm.table.component/atm.table.component';
import {AtmService} from './shared/services/atm.service';
import {AtmAddComponent} from './atm.add.component/atm.add.component';
import {NgSelectModule} from '@ng-select/ng-select';
import {AtmEditComponent} from './atm.edit.component/atm.edit.component';

@NgModule({
  declarations: [
    AtmTableComponent,
    AtmAddComponent,
    AtmEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSelectModule,
    ReactiveFormsModule,
    DataTablesModule
  ],
  exports: [],
  providers: [AtmService]
})
export class AtmModule {
}
