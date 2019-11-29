import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EtapeService } from '../etape.service';

@Component({
  selector: 'app-etape-trois',
  templateUrl: './etape-trois.component.html',
  styleUrls: ['./etape-trois.component.scss']
})
export class EtapeTroisComponent implements OnInit {
  
  isVisible : boolean = false;
  subscription : Subscription;

  constructor(public etapeService : EtapeService) {
    this.subscription = etapeService.isEtapeThreeVisible$.subscribe(
      isVisible => {
        this.isVisible = isVisible;
      }
    )
   }

  ngOnInit() {
  }
}
