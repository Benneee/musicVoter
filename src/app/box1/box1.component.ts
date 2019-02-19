import { Component, OnInit } from '@angular/core';
import { ThemeDirective } from '../../app/theme.directive';


@Component({
  selector: 'app-box1',
  templateUrl: './box1.component.html',
  styleUrls: ['./box1.component.scss']
})
export class Box1Component implements OnInit {

  constructor() {

   }

  ngOnInit() {
  	window.document.getElementById("#box1").style.background = "--this-var: #FF0000";
  	console.log('theme touched')
  }

}
