import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hand } from '../../model/hand';

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.scss']
})
export class HandComponent implements OnInit {
  @Input() hand: Hand;
  @Input() index: number;
  @Output() splitHand: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  public split() {
    this.splitHand.emit(this.index);
  }
}
