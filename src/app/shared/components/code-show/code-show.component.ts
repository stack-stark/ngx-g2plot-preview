import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'stark-code-show',
  templateUrl: './code-show.component.html',
  styleUrls: ['./code-show.component.less']
})
export class CodeShowComponent implements OnInit {

  @Input() codes: object;

  objectKeys = Object.keys;

  constructor() { }

  ngOnInit(): void {
  }


}
