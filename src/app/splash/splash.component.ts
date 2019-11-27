import { Component, OnInit } from '@angular/core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss']
})
export class SplashComponent implements OnInit {

  faChevronDown = faChevronDown;
  mainText : string = 'VOTRE PC SUR MESURE';
  underText : string = 'Un service en 4 étapes, de l\'entrepôt à votre bureau.';
  textColor : string = 'white';

  constructor() { }

  ngOnInit() {
  }

}
