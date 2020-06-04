import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app.module/shared/modules/app.routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {CountryAddComponent} from './country.add.component/country.add.component';
import {CountryTableComponent} from './country.table.component/country.table.component';
import {DataTablesModule} from 'angular-datatables';
import {CountriesService} from './shared/services/countries.service';
import {CountryEditComponent} from './country.edit.component/country.edit.component';

@NgModule({
  declarations: [
    CountryAddComponent,
    CountryTableComponent,
    CountryEditComponent
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
