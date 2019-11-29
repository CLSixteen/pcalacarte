import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-block',
  templateUrl: './second-block.component.html',
  styleUrls: ['./second-block.component.scss']
})
export class SecondBlockComponent implements OnInit {

  mainTitle : string = 'De l\'entrepôt à votre bureau en 4 étapes';

  constructor() { }

  ngOnInit() {
  }
}
