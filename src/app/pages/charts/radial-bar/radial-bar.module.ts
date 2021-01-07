import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadialBarComponent } from './radial-bar.component';
import { RouterModule, Routes } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { G2plotRadialBarModule, G2plotSankeyModule } from 'ngx-g2plot';

const routes: Routes = [
  { path: '', component: RadialBarComponent }
];


@NgModule({
  declarations: [RadialBarComponent],
  imports: [
    CommonModule,
    MarkdownModule.forRoot(),
    RouterModule.forChild(routes),
    NzTabsModule,
    G2plotRadialBarModule
  ]
})
export class RadialBarModule { }
