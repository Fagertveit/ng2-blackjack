import { Component, OnInit } from '@angular/core';
import { Hand } from '../../model/hand';
import { Deck } from '../../model/deck';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  public deck: Deck;
  public bank: Hand;
  public player: Hand[] = [];
  public showResult: boolean = false;

  constructor() { }

  ngOnInit() {
    this.restart();
  }

  public hitMe(): void {
    for (let hand of this.player) {
      hand.addCard(this.deck.getCard());
    }
  }

  public stop(): void {
    let bankTakesCard = true;
    while (bankTakesCard) {
      this.bank.addCard(this.deck.getCard());

      if (this.bank.isBust) {
        bankTakesCard = false;
      }

      if (this.bank.getValue() > 16) {
        bankTakesCard = false;
      }
    }

    this.showResult = true;
  }

  public splitHand(index: number): void {
    this.player = [...this.player.splice(index, 1)[0].split()];
  }

  public restart() {
    this.deck = new Deck();
    this.bank = new Hand(true);
    this.player = [];
    this.player.push(new Hand());
  }
}
