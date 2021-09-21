import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoanDecisionComponent } from './loan-decision/loan-decision.component';
import { RequestFormComponent } from './loan-decision/request-form/request-form.component';
import { ResponseListComponent } from './loan-decision/response-list/response-list.component';
import { DemoNgZorroAntdModule } from './ng-zorro-antd.module';

registerLocaleData(en);

@NgModule({
  declarations: [AppComponent, LoanDecisionComponent, RequestFormComponent, ResponseListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DemoNgZorroAntdModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
