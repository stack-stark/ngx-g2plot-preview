``` js 
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FunnelComponent } from './funnel.component';
import { RouterModule, Routes } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { G2plotFunnelModule } from 'ngx-g2plot';
const routes: Routes = [
  { path: '', component: FunnelComponent }
];


@NgModule({
  declarations: [FunnelComponent],
  imports: [
    CommonModule,
    MarkdownModule.forRoot(),
    RouterModule.forChild(routes),
    NzTabsModule,
    G2plotFunnelModule
  ]
})
export class FunnelModule { }

```