/*
 * @Description:
 * @Date: 2020-05-12 17:33:54
 * @LastEditors: tanmh
 * @LastEditTime: 2020-12-03 15:13:18
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { G2plotAreaModule } from 'ngx-g2plot';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTabsModule } from 'ng-zorro-antd/tabs';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    G2plotAreaModule,
    NzGridModule,
    NzTabsModule
  ],
  exports: [
    NzGridModule,
  ]
})
export class SharedModule { }
