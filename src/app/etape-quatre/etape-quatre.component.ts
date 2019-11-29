import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EtapeService } from '../etape.service';

@Component({
  selector: 'app-etape-quatre',
  templateUrl: './etape-quatre.component.html',
  styleUrls: ['./etape-quatre.component.scss']
})
export class EtapeQuatreComponent implements OnInit {

  isVisible : boolean = false;
  subscription : Subscription;

  constructor(public etapeService : EtapeService) {
    this.subscription = etapeService.isEtapeFourVisible$.subscribe(
      isVisible => {
        this.isVisible = isVisible;
      }
    )
   }

  ngOnInit() {
  }

}
