```js 
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonutBasicComponent } from './donut-basic.component';
import { G2plotPieModule } from 'ngx-g2plot';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { RouterModule, Routes } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';

const routes: Routes = [
  { path: '', component: DonutBasicComponent }
];

@NgModule({
  declarations: [DonutBasicComponent],
  imports: [
    CommonModule,
    MarkdownModule.forRoot(),
    RouterModule.forChild(routes),
    G2plotPieModule,
    NzTabsModule
  ]
})
export class DonutBasicModule { }
```