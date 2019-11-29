import { Component, OnInit } from '@angular/core';
import { EtapeService } from '../etape.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-etape-un',
  templateUrl: './etape-un.component.html',
  styleUrls: ['./etape-un.component.scss']
})
export class EtapeUnComponent implements OnInit {

  isVisible : boolean = true;
  subscription : Subscription;

  constructor(public etapeService : EtapeService) {
    this.subscription = etapeService.isEtapeOneVisible$.subscribe(
      isVisible => {
        this.isVisible = isVisible;
      }
    )
   }

  ngOnInit() {
  }

}
