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
  underText : string = 'Un service simple, rapide et complet, de l\'entrepot à votre bureau.';
  textColor : string = 'white';

  constructor() { }

  ngOnInit() {
  }

}
