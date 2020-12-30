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
        path: 'line/lineBasic',
        loadChildren: () => import('./pages/charts/line/line-basic/line-basic.module').then(m => m.LineBasicModule)
      },
      {
        path: 'line/lineMultiple',
        loadChildren: () => import('./pages/charts/line/line-multiple/line-multiple.module').then(m => m.LineMultipleModule)
      },
      {
        path: 'line/lineStep',
        loadChildren: () => import('./pages/charts/line/line-step/line-step.module').then(m => m.LineStepModule)
      },
      {
        path: 'area/areaBasic',
        loadChildren: () => import('./pages/charts/area/area-basic/area-basic.module').then(m => m.AreaBasicModule)
      },
      {
        path: 'area/areaStacked',
        loadChildren: () => import('./pages/charts/area/area-stacked/area-stacked.module').then(m => m.AreaStackedModule)
      },
      {
        path: 'area/areaPercent',
        loadChildren: () => import('./pages/charts/area/area-percent/area-percent.module').then(m => m.AreaPercentModule)
      },
      {
        path: 'column/columnBasic',
        loadChildren: () => import('./pages/charts/column/column-basic/column-basic.module').then(m => m.ColumnBasicModule)
      },
      {
        path: 'column/columnStacked',
        loadChildren: () => import('./pages/charts/column/column-stacked/column-stacked.module').then(m => m.ColumnStackedModule)
      },
      {
        path: 'column/columnGrouped',
        loadChildren: () => import('./pages/charts/column/column-grouped/column-grouped.module').then(m => m.ColumnGroupedModule)
      },
      {
        path: 'column/columnPercent',
        loadChildren: () => import('./pages/charts/column/column-percent/column-percent.module').then(m => m.ColumnPercentModule)
      },
      {
        path: 'column/columnRange',
        loadChildren: () => import('./pages/charts/column/column-range/column-range.module').then(m => m.ColumnRangeModule)
      },
      {
        path: 'pie/pieBasic',
        loadChildren: () => import('./pages/charts/pie/pie-basic/pie-basic.module').then(m => m.PieBasicModule)
      },
      {
        path: 'donut/donutBasic',
        loadChildren: () => import('./pages/charts/pie/donut-basic/donut-basic.module').then(m => m.DonutBasicModule)
      },
      {
        path: 'gauge/gaugeBasic',
        loadChildren: () => import('./pages/charts/gauge/gauge-basic/gauge-basic.module').then(m => m.GaugeBasicModule)
      },

      {
        path: 'bar/barBasic',
        loadChildren: () => import('./pages/charts/bar/bar-basic/bar-basic.module').then(m => m.BarBasicModule)
      },
      {
        path: 'bar/barStackedBar',
        loadChildren: () => import('./pages/charts/bar/bar-stacked/bar-stacked.module').then(m => m.BarStackedModule)
      },
      {
        path: 'bar/barGroupedBar',
        loadChildren: () => import('./pages/charts/bar/bar-grouped/bar-grouped.module').then(m => m.BarGroupedModule)
      },
      {
        path: 'bar/barPercent',
        loadChildren: () => import('./pages/charts/bar/bar-percent/bar-percent.module').then(m => m.BarPercentModule)
      },
      {
        path: 'bar/barRangeBar',
        loadChildren: () => import('./pages/charts/bar/bar-range/bar-range.module').then(m => m.BarRangeModule)
      },
      {
        path: 'waterfall/waterfallBasic',
        loadChildren: () => import('./pages/charts/waterfall/waterfall-basic/waterfall-basic.module').then(m => m.WaterfallBasicModule)
      },
      {
        path: 'scatter/scatterBasic',
        loadChildren: () => import('./pages/charts/scatter/scatter-basic/scatter-basic.module').then(m => m.ScatterBasicModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
