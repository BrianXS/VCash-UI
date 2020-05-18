import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app.module/shared/modules/app.routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {DataTablesModule} from 'angular-datatables';
import {VehicleTableComponent} from './vehicle.table.component/vehicle.table.component';
import {VehiclesService} from './shared/services/vehicles.service';

@NgModule({
  declarations: [
    VehicleTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    DataTablesModule
  ],
  exports: [],
  providers: [VehiclesService]
})
export class VehicleModule {
}
