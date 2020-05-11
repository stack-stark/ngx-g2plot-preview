import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';
import { IconsProviderModule } from './icons-provider.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { NzLayoutModule, NzMenuModule } from 'ng-zorro-antd';
import { DesktopComponent } from './layout/desktop/desktop.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    DesktopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsProviderModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    NzMenuModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
  ],
})
export class AppModule { }