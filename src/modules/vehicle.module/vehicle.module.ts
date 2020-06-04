import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app.module/shared/modules/app.routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DataTablesModule} from 'angular-datatables';
import {VehicleTableComponent} from './vehicle.table.component/vehicle.table.component';
import {VehiclesService} from './shared/services/vehicles.service';
import {VehicleAddComponent} from './vehicle.add.component/vehicle.add.component';
import {NgSelectModule} from '@ng-select/ng-select';
import {VehicleEditComponent} from './vehicle.edit.component/vehicle.edit.component';

@NgModule({
  declarations: [
    VehicleTableComponent,
    VehicleAddComponent,
    VehicleEditComponent
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
  providers: [VehiclesService]
})
export class VehicleModule {
}
