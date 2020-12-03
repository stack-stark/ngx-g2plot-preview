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
        path: 'About',
        loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule)
      },
      {
        path: 'line/line-basic',
        loadChildren: () => import('./pages/line/line.module').then(m => m.LineModule)
      },

      // {
      //   path: 'Bar',
      //   loadChildren: () => import('./pages/bar/bar.module').then(m => m.BarModule)
      // },
      // {
      //   path: 'Line',
      //   loadChildren: () => import('./pages/line/line.module').then(m => m.LineModule)
      // },
      // {
      //   path: 'StepLine',
      //   loadChildren: () => import('./pages/step-line/step-line.module').then(m => m.StepLineModule)
      // },
      // {
      //   path: 'Area',
      //   loadChildren: () => import('./pages/area/area.module').then(m => m.AreaModule)
      // },
      // {
      //   path: 'StackedArea',
      //   loadChildren: () => import('./pages/stacked-area/stacked-area.module').then(m => m.StackedAreaModule)
      // },
      // {
      //   path: 'Column',
      //   loadChildren: () => import('./pages/column/column.module').then(m => m.ColumnModule)
      // },
      // {
      //   path: 'StackedColumn',
      //   loadChildren: () => import('./pages/stacked-column/stacked-column.module').then(m => m.StackedColumnModule)
      // },
      // {
      //   path: 'GroupedColumn',
      //   loadChildren: () => import('./pages/grouped-column/grouped-column.module').then(m => m.GroupedColumnModule)
      // },
      // {
      //   path: 'RangeColumn',
      //   loadChildren: () => import('./pages/range-column/range-column.module').then(m => m.RangeColumnModule)
      // },
      // {
      //   path: 'Histogram',
      //   loadChildren: () => import('./pages/histogram/histogram.module').then(m => m.HistogramModule)
      // },
      // {
      //   path: 'Waterfall',
      //   loadChildren: () => import('./pages/waterfall/waterfall.module').then(m => m.WaterfallModule)
      // },
      // {
      //   path: 'StackedBar',
      //   loadChildren: () => import('./pages/stacked-bar/stacked-bar.module').then(m => m.StackedBarModule)
      // },
      // {
      //   path: 'GroupedBar',
      //   loadChildren: () => import('./pages/grouped-bar/grouped-bar.module').then(m => m.GroupedBarModule)
      // },
      // {
      //   path: 'RangeBar',
      //   loadChildren: () => import('./pages/range-bar/range-bar.module').then(m => m.RangeBarModule)
      // },
      // {
      //   path: 'Pie',
      //   loadChildren: () => import('./pages/pie/pie.module').then(m => m.PieModule)
      // },
      // {
      //   path: 'Donut',
      //   loadChildren: () => import('./pages/donut/donut.module').then(m => m.DonutModule)
      // },
      // {
      //   path: 'Rose',
      //   loadChildren: () => import('./pages/rose/rose.module').then(m => m.RoseModule)
      // },
      // {
      //   path: 'StackedRose',
      //   loadChildren: () => import('./pages/stacked-rose/stacked-rose.module').then(m => m.StackedRoseModule)
      // },
      // {
      //   path: 'GroupedRose',
      //   loadChildren: () => import('./pages/grouped-rose/grouped-rose.module').then(m => m.GroupedRoseModule)
      // },
      // {
      //   path: 'Radar',
      //   loadChildren: () => import('./pages/radar/radar.module').then(m => m.RadarModule)
      // },
      // {
      //   path: 'Scatter',
      //   loadChildren: () => import('./pages/scatter/scatter.module').then(m => m.ScatterModule)
      // },
      // {
      //   path: 'Bubble',
      //   loadChildren: () => import('./pages/bubble/bubble.module').then(m => m.BubbleModule)
      // },
      // {
      //   path: 'Heatmap',
      //   loadChildren: () => import('./pages/Heatmap/Heatmap.module').then(m => m.HeatmapModule)
      // },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
