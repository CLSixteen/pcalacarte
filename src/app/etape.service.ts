import { Injectable } from '@angular/core';
import { EventEmitter } from 'events';

@Injectable({
  providedIn: 'root'
})
export class EtapeService {

  toggle : EventEmitter = new EventEmitter();

  constructor() { }
}
