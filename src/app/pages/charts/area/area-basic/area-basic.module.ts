/*
 * @Description:
 * @Date: 2020-12-04 10:46:27
 * @LastEditors: tanmh
 * @LastEditTime: 2020-12-04 10:54:59
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaBasicComponent } from './area-basic.component';
import { RouterModule, Routes } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { G2plotAreaModule } from 'ngx-g2plot';
import { SharedModule } from 'src/app/shared/shared.module';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { MarkdownModule } from 'ngx-markdown';
const routes: Routes = [
  { path: '', component: AreaBasicComponent }
];

@NgModule({
  declarations: [AreaBasicComponent],
  imports: [
    CommonModule,
    MarkdownModule.forRoot(),
    RouterModule.forChild(routes),
    G2plotAreaModule,
    NzTabsModule
  ]
})
export class AreaBasicModule { }
