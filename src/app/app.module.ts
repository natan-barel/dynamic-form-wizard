import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WizardModule } from '@wizard/wizard.module';
import { StepsModule } from '@wizard/steps/steps.module';
import { WindowRef } from '@shared/services/window-ref.service';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    WizardModule,
    StepsModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    WindowRef
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
