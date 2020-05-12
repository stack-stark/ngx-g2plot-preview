import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styleUrls: ['./radar.component.less']
})
export class RadarComponent implements OnInit {

  constructor() { }

  data = [
    {
      item: 'Design',
      score: 70,
    },
    {
      item: 'Development',
      score: 60,
    },
    {
      item: 'Marketing',
      score: 60,
    },
    {
      item: 'Users',
      score: 40,
    },
    {
      item: 'Test',
      score: 60,
    },
    {
      item: 'Language',
      score: 70,
    },
    {
      item: 'Technology',
      score: 50,
    },
    {
      item: 'Support',
      score: 30,
    },
    {
      item: 'Sales',
      score: 60,
    },
    {
      item: 'UX',
      score: 50,
    },
  ];

  options = {
    data: this.data,
    angleField: 'item',
    radiusField: 'score',
    radiusAxis: {
      gridType: 'arc',
      gridAlternateColor: 'rgba(0, 0, 0, 0.04)',
    },
  };

  codes = {
    codeTs: {
      title: `radar.component.ts`,
      code: `import { Component, OnInit } from '@angular/core';

      @Component({
        selector: 'app-radar',
        templateUrl: './radar.component.html',
        styleUrls: ['./radar.component.less']
      })
      export class RadarComponent implements OnInit {
      
        constructor() { }
      
        data = [
          {
            item: 'Design',
            score: 70,
          },
          {
            item: 'Development',
            score: 60,
          },
          {
            item: 'Marketing',
            score: 60,
          },
          {
            item: 'Users',
            score: 40,
          },
          {
            item: 'Test',
            score: 60,
          },
          {
            item: 'Language',
            score: 70,
          },
          {
            item: 'Technology',
            score: 50,
          },
          {
            item: 'Support',
            score: 30,
          },
          {
            item: 'Sales',
            score: 60,
          },
          {
            item: 'UX',
            score: 50,
          },
        ];
      
        options = {
          data: this.data,
          angleField: 'item',
          radiusField: 'score',
          radiusAxis: {
            gridType: 'arc',
            gridAlternateColor: 'rgba(0, 0, 0, 0.04)',
          },
        };
      }
      `,
    },
    codeHtml: {
      title: `radar.component.html`,
      code: `<div starkG2plotRadar [options]="options" style="width: 500px;"></div>`,
    },
  };

  ngOnInit(): void {
  }

}
