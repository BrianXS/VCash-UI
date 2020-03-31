import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app.module/shared/modules/app.routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {DataTablesModule} from 'angular-datatables';
import {BranchFormComponent} from './branch.form.component/branch.form.component';
import {BranchTableComponent} from './branch.table.component/branch.table.component';
import {BranchesServices} from './shared/services/branch.service';

@NgModule({
  declarations: [
    BranchFormComponent,
    BranchTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    DataTablesModule
  ],
  exports: [],
  providers: [BranchesServices]
})
export class BranchModule {
}
