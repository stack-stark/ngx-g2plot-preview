import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaPercentComponent } from './area-percent.component';
import { RouterModule, Routes } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { G2plotAreaModule } from 'ngx-g2plot';

const routes: Routes = [
  { path: '', component: AreaPercentComponent }
];

@NgModule({
  declarations: [AreaPercentComponent],
  imports: [
    CommonModule,
    MarkdownModule.forRoot(),
    RouterModule.forChild(routes),
    G2plotAreaModule,
    NzTabsModule
  ]
})
export class AreaPercentModule { }
