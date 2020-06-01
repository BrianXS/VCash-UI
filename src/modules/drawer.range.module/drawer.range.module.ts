import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app.module/shared/modules/app.routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {DataTablesModule} from 'angular-datatables';
import {DrawerRangeTableComponent} from './drawer.range.table.component/drawer.range.table.component';
import {DrawerRangeService} from './shared/services/drawer.range.service';
import {DrawerRangeAddComponent} from './drawer.range.add.component/drawer.range.add.component';
import {NgSelectModule} from '@ng-select/ng-select';

@NgModule({
  declarations: [
    DrawerRangeTableComponent,
    DrawerRangeAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSelectModule,
    ReactiveFormsModule,
    DataTablesModule
  ],
  exports: [],
  providers: [DrawerRangeService]
})
export class DrawerRangeModule {
}
