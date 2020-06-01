import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app.module/shared/modules/app.routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {DataTablesModule} from 'angular-datatables';
import {BatteryTableComponent} from './battery.table.component/battery.table.component';
import {BatteryService} from './shared/services/battery.service';
import {BatteryFormComponent} from './battery.form.component/battery.form.component';

@NgModule({
  declarations: [
    BatteryTableComponent,
    BatteryFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    DataTablesModule
  ],
  exports: [],
  providers: [BatteryService]
})
export class BatteryModule {
}
