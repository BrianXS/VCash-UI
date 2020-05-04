import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app.module/shared/modules/app.routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DataTablesModule} from 'angular-datatables';
import {StateFormComponent} from './state.form.component/state.form.component';
import {StateTableComponent} from './state.table.component/state.table.component';
import {StatesService} from './shared/services/statesService';
import {StateEditComponent} from "./state.edit.component/state.edit.component";
import {NgSelect2Module} from "ng-select2";

@NgModule({
  declarations: [
    StateFormComponent,
    StateTableComponent,
    StateEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    DataTablesModule,
    NgSelect2Module
  ],
  exports: [],
  providers: [StatesService]
})
export class StateModule {
}
