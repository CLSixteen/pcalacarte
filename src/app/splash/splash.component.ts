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
  underText : string = 'Simple, rapide, efficace. Un service complet depuis l\'entrepot jusqu\'à votre bureau.';
  textColor : string = 'white';

  constructor() { }

  ngOnInit() {
  }

}
