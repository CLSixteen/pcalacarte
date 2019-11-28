import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-etape',
  templateUrl: './etape.component.html',
  styleUrls: ['./etape.component.scss']
})
export class EtapeComponent implements OnInit {

  @Input() title : string = '';
  isVisible : boolean = false;
  content: string = 'coucou';

  constructor() { }

  ngOnInit() {
  }

}
