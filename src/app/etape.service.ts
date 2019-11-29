import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EtapeService {

  //Observables
  isEtapeOneVisible = new Subject<boolean>();
  isEtapeTwoVisible = new Subject<boolean>();
  isEtapeThreeVisible = new Subject<boolean>();
  isEtapeFourVisible = new Subject<boolean>();

  //Streams
  isEtapeOneVisible$ = this.isEtapeOneVisible.asObservable();
  isEtapeTwoVisible$ = this.isEtapeTwoVisible.asObservable();
  isEtapeThreeVisible$ = this.isEtapeThreeVisible.asObservable();
  isEtapeFourVisible$ = this.isEtapeFourVisible.asObservable();

  setVisible(id: number) {
    switch(id) {
      case 1:
        this.isEtapeOneVisible.next(true);
        this.isEtapeTwoVisible.next(false);
        this.isEtapeThreeVisible.next(false);
        this.isEtapeFourVisible.next(false);
        console.log('service trigger');
        break;
      case 2:
        this.isEtapeOneVisible.next(false);
        this.isEtapeTwoVisible.next(true);
        this.isEtapeThreeVisible.next(false);
        this.isEtapeFourVisible.next(false);
        break;
      case 3:
        this.isEtapeOneVisible.next(false);
        this.isEtapeTwoVisible.next(false);
        this.isEtapeThreeVisible.next(true);
        this.isEtapeFourVisible.next(false);
        break;
      case 4:
        this.isEtapeOneVisible.next(false);
        this.isEtapeTwoVisible.next(false);
        this.isEtapeThreeVisible.next(false);
        this.isEtapeFourVisible.next(true);
        break;
    }
  }

  constructor() { }
}
