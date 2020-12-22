``` js
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineMultipleComponent } from './line-multiple.component';
import { MarkdownModule } from 'ngx-markdown';
import { RouterModule, Routes } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { G2plotLineModule } from 'ngx-g2plot';
import { NzTabsModule } from 'ng-zorro-antd/tabs';

const routes: Routes = [
  { path: '', component: LineMultipleComponent }
];
@NgModule({
  declarations: [LineMultipleComponent],
  imports: [
    CommonModule,
    MarkdownModule.forRoot(),
    RouterModule.forChild(routes),
    NzButtonModule,
    G2plotLineModule,
    NzTabsModule
  ]
})
export class LineMultipleModule { }

```