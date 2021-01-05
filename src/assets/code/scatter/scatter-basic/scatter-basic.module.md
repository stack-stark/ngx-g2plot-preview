```js 
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScatterBasicComponent } from './scatter-basic.component';
import { G2plotScatterModule } from 'ngx-g2plot';
import { MarkdownModule } from 'ngx-markdown';
import { RouterModule, Routes } from '@angular/router';
import { NzTabsModule } from 'ng-zorro-antd/tabs';

const routes: Routes = [
  { path: '', component: ScatterBasicComponent }
];

@NgModule({
  declarations: [ScatterBasicComponent],
  imports: [
    CommonModule,
    MarkdownModule.forRoot(),
    RouterModule.forChild(routes),
    G2plotScatterModule,
    NzTabsModule,
    NzSpinModule
  ]
})
export class ScatterBasicModule { }

```