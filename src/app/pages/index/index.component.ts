/*
 * @Description:
 * @Date: 2020-05-15 10:36:12
 * @LastEditors: tanmh
 * @LastEditTime: 2020-12-04 11:12:04
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  toPreview() {
    this.router.navigateByUrl('/preview/line/lineBasic');
  }
}
