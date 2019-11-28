import { Component, OnInit } from '@angular/core';
import { EtapeService } from '../etape.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  selected = 0;

  constructor(public etapeService : EtapeService) { }

  ngOnInit() {
  }

  changeContent(item:number){
    console.log(item + 1);
  }

}
