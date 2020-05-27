import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RootComponent } from './root.component/root.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {LoginModule} from '../login.module/login.module';
import {TokenInterceptor} from './shared/services/token.interceptor';
import {AppRoutingModule} from './shared/modules/app.routing.module';
import {DashboardModule} from '../dashboard.module/dashboard.module';
import {TokenVerificator} from './shared/services/token.verificator';
import {FailureModule} from '../failure.module/failure.module';
import {EnumToArray} from './shared/services/enum.to.array';

@NgModule({
  declarations: [
    RootComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    LoginModule,
    DashboardModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
    TokenVerificator,
    EnumToArray
  ],
  bootstrap: [RootComponent]
})
export class AppModule { }
