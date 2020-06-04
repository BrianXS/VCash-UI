import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app.module/shared/modules/app.routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {DataTablesModule} from 'angular-datatables';
import {BranchAddComponent} from './branch.add.component/branch.add.component';
import {BranchTableComponent} from './branch.table.component/branch.table.component';
import {BranchesServices} from './shared/services/branch.service';
import {BranchEditComponent} from './branch.edit.component/branch.edit.component';

@NgModule({
  declarations: [
    BranchAddComponent,
    BranchTableComponent,
    BranchEditComponent
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
