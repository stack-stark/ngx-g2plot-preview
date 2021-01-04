```js 
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PieBasicComponent } from './pie-basic.component';
import { G2plotPieModule } from 'ngx-g2plot';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { RouterModule, Routes } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';

const routes: Routes = [
  { path: '', component: PieBasicComponent }
];

@NgModule({
  declarations: [PieBasicComponent],
  imports: [
    CommonModule,
    MarkdownModule.forRoot(),
    RouterModule.forChild(routes),
    G2plotPieModule,
    NzTabsModule
  ]
})
export class PieBasicModule { }

```