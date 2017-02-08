import { Injectable } from '@angular/core';
import { Card } from '../model/card';
import * as _ from 'lodash';

@Injectable()
export class CardsService {
  private deck: Card[] = [];

  constructor() { }
}
