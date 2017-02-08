import { Component } from '@angular/core';
import { CardsService } from './service/cards.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng2-blackjack';

  constructor(private cardsService: CardsService) { }

  ngOnInit() {
  }
}
