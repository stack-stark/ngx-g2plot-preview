```js 
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarStackedComponent } from './bar-stacked.component';
import { RouterModule, Routes } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { G2plotBarModule } from 'ngx-g2plot';


const routes: Routes = [
  { path: '', component: BarStackedComponent }
];
@NgModule({
  declarations: [BarStackedComponent],
  imports: [
    CommonModule,
    MarkdownModule.forRoot(),
    RouterModule.forChild(routes),
    G2plotBarModule,
    NzTabsModule
  ]
})
export class BarStackedModule { }

```