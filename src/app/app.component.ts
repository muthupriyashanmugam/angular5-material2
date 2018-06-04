import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  events = [];
  menuList:Array<any>;
  constructor() {}

  ngOnInit() {
    this.menuList =[
      {
        name:'Table',
        path:'table'
      },
      {
        name:'Wizard Form',
        path:'stepper'
      }
    ];
  }
}
