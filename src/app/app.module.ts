import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BlackjackPipe } from './pipe/blackjack.pipe';

import { CardsService } from './service/cards.service';
import { GameComponent } from './component/game/game.component';
import { HandComponent } from './component/hand/hand.component';

@NgModule({
  declarations: [
    AppComponent,
    BlackjackPipe,
    GameComponent,
    HandComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CardsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
