import {NgModule} from '@angular/core';
import {FailureAddComponent} from './failure.add.component/failure.add.component';
import {FailureTableComponent} from './failure.table.component/failure.table.component';
import {AppRoutingModule} from '../app.module/shared/modules/app.routing.module';
import {FailuresService} from './shared/services/failures.service';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {DataTablesModule} from 'angular-datatables';
import {FailureEditComponent} from './failure.edit.component/failure.edit.component';

@NgModule({
  declarations: [
    FailureAddComponent,
    FailureTableComponent,
    FailureEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    DataTablesModule
  ],
  exports: [
    FailureAddComponent,
    FailureTableComponent
  ],
  providers: [
    FailuresService
  ]
})
export class FailureModule {

}
