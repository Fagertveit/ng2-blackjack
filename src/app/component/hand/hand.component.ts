import { Component, OnInit, Input } from '@angular/core';
import { Hand } from '../../model/hand';

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.scss']
})
export class HandComponent implements OnInit {
  @Input() hand: Hand;

  constructor() { }

  ngOnInit() {
  }
}
