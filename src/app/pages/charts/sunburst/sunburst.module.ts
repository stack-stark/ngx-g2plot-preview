import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SunburstComponent } from './sunburst.component';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { RouterModule, Routes } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { G2plotSunburstModule } from 'ngx-g2plot';

const routes: Routes = [
  { path: '', component: SunburstComponent }
];


@NgModule({
  declarations: [SunburstComponent],
  imports: [
    CommonModule,
    MarkdownModule.forRoot(),
    RouterModule.forChild(routes),
    NzTabsModule,
    NzSpinModule,
    G2plotSunburstModule
  ]
})
export class SunburstModule { }
