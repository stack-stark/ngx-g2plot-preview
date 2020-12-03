import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineBasicComponent } from './line-basic.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { G2plotLineModule } from 'ngx-g2plot';
import { LineComponent } from 'src/app/pages/line/line.component';
const routes: Routes = [
  { path: '', component: LineComponent }
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
