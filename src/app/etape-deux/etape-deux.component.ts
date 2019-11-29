import { Component, OnInit } from '@angular/core';
import { EtapeService } from '../etape.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-etape-deux',
  templateUrl: './etape-deux.component.html',
  styleUrls: ['./etape-deux.component.scss']
})
export class EtapeDeuxComponent implements OnInit {

  isVisible : boolean = false;
  subscription : Subscription;

  constructor(public etapeService : EtapeService) { 
    this.subscription = etapeService.isEtapeTwoVisible$.subscribe(
      isVisible => {
        this.isVisible = isVisible;
      }
    )

  }

  ngOnInit() {
  }

}
