``` js 
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SankeyBasicComponent } from './sankey-basic.component';
import { RouterModule, Routes } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { G2plotSankeyModule } from 'ngx-g2plot';

const routes: Routes = [
  { path: '', component: SankeyBasicComponent }
];

@NgModule({
  declarations: [SankeyBasicComponent],
  imports: [
    CommonModule,
    MarkdownModule.forRoot(),
    RouterModule.forChild(routes),
    G2plotSankeyModule,
    NzTabsModule
  ]
})
export class SankeyBasicModule { }

```