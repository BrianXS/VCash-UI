import {NgModule} from "@angular/core";
import {OfficeMovementAddComponent} from "./office.movement.add.component/office.movement.add.component";
import {BrowserModule} from "@angular/platform-browser";
import {ReactiveFormsModule} from "@angular/forms";
import {NgSelectModule} from "@ng-select/ng-select";
import {OfficeMovementRepository} from "./shared/services/office.movement.repository";
import {IConfig, NgxMaskModule} from "ngx-mask";

export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};

@NgModule({
  declarations: [
    OfficeMovementAddComponent
  ],
  imports: [
    BrowserModule,
    NgSelectModule,
    NgxMaskModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [OfficeMovementRepository],
  exports: [
    OfficeMovementAddComponent
  ]
})
export class OfficeMovementModule {

}
