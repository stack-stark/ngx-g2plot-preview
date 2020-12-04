/*
 * @Description:
 * @Date: 2020-12-03 17:07:50
 * @LastEditors: tanmh
 * @LastEditTime: 2020-12-04 10:52:26
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineBasicComponent } from './line-basic.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { G2plotLineModule } from 'ngx-g2plot';
const routes: Routes = [
  { path: '', component: LineBasicComponent }
];


@NgModule({
  declarations: [LineBasicComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NzButtonModule,
    G2plotLineModule,
    SharedModule
  ]
})
export class LineBasicModule { }
