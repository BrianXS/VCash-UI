import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app.module/shared/modules/app.routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {DataTablesModule} from 'angular-datatables';
import {DrawerTableComponent} from './drawer.table.component/drawer.table.component';
import {DrawerService} from './shared/services/drawer.service';

@NgModule({
  declarations: [
    DrawerTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    DataTablesModule
  ],
  exports: [],
  providers: [DrawerService]
})
export class DrawerModule {
}
