import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app.module/shared/modules/app.routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {CountryFormComponent} from './country.form.component/country.form.component';
import {CountryTableComponent} from './country.table.component/country.table.component';
import {DataTablesModule} from 'angular-datatables';
import {CountriesService} from './shared/services/countries.service';

@NgModule({
  declarations: [
    CountryFormComponent,
    CountryTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    DataTablesModule
  ],
  exports: [],
  providers: [ CountriesService ]
})
export class CountryModule {
}