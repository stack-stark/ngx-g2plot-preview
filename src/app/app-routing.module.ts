import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesktopComponent } from './layout/desktop/desktop.component';
import { IndexComponent } from './pages/index/index.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  {
    path: 'preview',
    component: DesktopComponent,
    children: [
      {
        path: 'Bar',
        loadChildren: () => import('./pages/bar/bar.module').then(m => m.BarModule)
      },
      {
        path: 'Line',
        loadChildren: () => import('./pages/line/line.module').then(m => m.LineModule)
      },
      {
        path: 'StepLine',
        loadChildren: () => import('./pages/step-line/step-line.module').then(m => m.StepLineModule)
      },
      {
        path: 'Area',
        loadChildren: () => import('./pages/area/area.module').then(m => m.AreaModule)
      },
      {
        path: 'StackedArea',
        loadChildren: () => import('./pages/stacked-area/stacked-area.module').then(m => m.StackedAreaModule)
      },
      {
        path: 'Column',
        loadChildren: () => import('./pages/column/column.module').then(m => m.ColumnModule)
      },
      {
        path: 'StackedColumn',
        loadChildren: () => import('./pages/stacked-column/stacked-column.module').then(m => m.StackedColumnModule)
      },
      {
        path: 'GroupedColumn',
        loadChildren: () => import('./pages/grouped-column/grouped-column.module').then(m => m.GroupedColumnModule)
      },
      {
        path: 'RangeColumn',
        loadChildren: () => import('./pages/range-column/range-column.module').then(m => m.RangeColumnModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
