import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-card',
  templateUrl: './my-card.component.html',
  styleUrls: ['./my-card.component.scss']
})
export class MyCardComponent implements OnInit {

  @Input() backgroundColor: string = '';
  @Input() titleColor: string = '';
  @Input() customTitle : string = '';

  constructor() { }

  ngOnInit() {
  }

}
