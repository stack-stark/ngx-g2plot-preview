``` js
import { Component } from '@angular/core';

@Component({
  selector: 'app-liquid-basic',
  templateUrl: './liquid-basic.component.html',
  styleUrls: ['./liquid-basic.component.less']
})
export class LiquidBasicComponent {

  constructor() { }

  options = {
    percent: 0.25,
    outline: {
      border: 4,
      distance: 8,
    },
    wave: {
      length: 128,
    },
  };

}

```