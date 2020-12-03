/*
 * @Description:
 * @Date: 2020-05-15 10:36:12
 * @LastEditors: tanmh
 * @LastEditTime: 2020-12-03 16:07:38
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import {  NzTableModule } from 'ng-zorro-antd/table';

const routes: Routes = [
  { path: '', component: AboutComponent }
];


@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    NzDividerModule,
    NzTypographyModule,
    NzTableModule
  ]
})
export class AboutModule { }
