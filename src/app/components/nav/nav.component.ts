import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html'
})
export class NavComponent implements OnInit {

  active = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
