import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadarComponent } from './radar.component';
import { G2plotRadarModule } from 'ngx-g2plot';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { RouterModule, Routes } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';

const routes: Routes = [
  { path: '', component: RadarComponent }
];

@NgModule({
  declarations: [RadarComponent],
  imports: [
    CommonModule,
    MarkdownModule.forRoot(),
    RouterModule.forChild(routes),
    NzTabsModule,
    G2plotRadarModule
  ]
})
export class RadarModule { }
