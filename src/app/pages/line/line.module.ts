/*
 * @Description:
 * @Date: 2020-05-12 17:33:54
 * @LastEditors: tanmh
 * @LastEditTime: 2020-12-03 15:16:19
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineComponent } from './line.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { G2plotLineModule } from 'ngx-g2plot';

const routes: Routes = [
  { path: '', component: LineComponent }
];

@NgModule({
  declarations: [LineComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    NzButtonModule,
    G2plotLineModule
  ]
})
export class LineModule { }
