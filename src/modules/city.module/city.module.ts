import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app.module/shared/modules/app.routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CityFormComponent} from './city.form.component/city.form.component';
import {CityTableComponent} from './city.table.component/city.table.component';
import {DataTablesModule} from 'angular-datatables';
import {CitiesService} from './shared/services/citiesService';
import {HttpClientModule} from '@angular/common/http';
import {NgSelectModule} from "@ng-select/ng-select";
import {CityEditComponent} from "./city.edit.component/city.edit.component";

@NgModule({
  declarations: [
    CityFormComponent,
    CityTableComponent,
    CityEditComponent
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
  providers: [CitiesService]
})
export class CityModule {
}
