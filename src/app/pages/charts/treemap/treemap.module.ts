import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreemapComponent } from './treemap.component';
import { MarkdownModule } from 'ngx-markdown';
import { RouterModule, Routes } from '@angular/router';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { G2plotTreemapModule } from 'ngx-g2plot';

const routes: Routes = [
  { path: '', component: TreemapComponent }
];

@NgModule({
  declarations: [TreemapComponent],
  imports: [
    CommonModule,
    MarkdownModule.forRoot(),
    RouterModule.forChild(routes),
    NzTabsModule,
    G2plotTreemapModule
  ]
})
export class TreemapModule { }
