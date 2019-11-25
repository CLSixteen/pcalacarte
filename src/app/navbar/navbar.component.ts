import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  links : string[];

  constructor() { }

  ngOnInit() {
    this.links.push("Accueil");
    this.links.push("À propos");
  }

}
