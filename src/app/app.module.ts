import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './navbar/navbar.component';
import { AccueilComponent } from './accueil/accueil.component';
import { SplashComponent } from './splash/splash.component';
import { FirstBlockComponent } from './first-block/first-block.component';
import { MyCardComponent } from './my-card/my-card.component';
import { SecondBlockComponent } from './second-block/second-block.component';
import { EtapeUnComponent } from './etape-un/etape-un.component';
import { EtapeDeuxComponent } from './etape-deux/etape-deux.component';
import { EtapeTroisComponent } from './etape-trois/etape-trois.component';
import { EtapeQuatreComponent } from './etape-quatre/etape-quatre.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AccueilComponent,
    SplashComponent,
    FirstBlockComponent,
    MyCardComponent,
    SecondBlockComponent,
    EtapeUnComponent,
    EtapeDeuxComponent,
    EtapeTroisComponent,
    EtapeQuatreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
