import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app.module/shared/modules/app.routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {CityFormComponent} from './city.form.component/city.form.component';
import {CityTableComponent} from './city.table.component/city.table.component';
import {DataTablesModule} from 'angular-datatables';
import {CitiesService} from './shared/services/citiesService';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    CityFormComponent,
    CityTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    DataTablesModule
  ],
  exports: [],
  providers: [CitiesService]
})
export class CityModule {
}
