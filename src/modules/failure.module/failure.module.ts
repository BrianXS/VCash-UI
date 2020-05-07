import {NgModule} from '@angular/core';
import {FailureFormComponent} from './failure.form.component/failure.form.component';
import {FailureTableComponent} from './failure.table.component/failure.table.component';
import {AppRoutingModule} from '../app.module/shared/modules/app.routing.module';
import {FailuresService} from './shared/services/failures.service';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {DataTablesModule} from 'angular-datatables';
import {FailureEditComponent} from "./failure.edit.component/failure.edit.component";

@NgModule({
  declarations: [
    FailureFormComponent,
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
    FailureFormComponent,
    FailureTableComponent
  ],
  providers: [
    FailuresService
  ]
})
export class FailureModule {

}
