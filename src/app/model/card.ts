export class Card {
  public value: number;
  public color: number;

  constructor(value: number, color: number) {
    this.value = value;
    this.color = color;
  }

  public toString(): string {
    return this.getStringValue() + ' of ' + this.getStringColor();
  }

  public getStringValue(): string {
    let str: string = '';

    switch (this.value) {
      case 1:
        str += 'Ace';
        break;
      case 2:
        str += 'Two';
        break;
      case 3:
        str += 'Three';
        break;
      case 4:
        str += 'Four';
        break;
      case 5:
        str += 'Five';
        break;
      case 6:
        str += 'Six';
        break;
      case 7:
        str += 'Seven';
        break;
      case 8:
        str += 'Eight';
        break;
      case 9:
        str += 'Nine';
        break;
      case 10:
        str += 'Ten';
        break;
      case 11:
        str += 'Jack';
        break;
      case 12:
        str += 'Queen';
        break;
      case 13:
        str += 'King';
        break;
    }

    return str;
  }

  public getStringColor(): string {
    let str: string = '';
    switch (this.color) {
      case 0:
        str += 'Hearts';
        break;
      case 1:
        str += 'Diamonds';
        break;
      case 2:
        str += 'Clubs';
        break;
      case 3:
        str += 'Spades';
        break;
    }

    return str;
  }

  public getValue(): number {
    return this.value;
  }

  public getColor(): number {
    return this.color;
  }

  public isAce(): boolean {
    return this.value === 1;
  }

  public getHighValue(): number {
    if (this.value > 9) {
      return 10;
    } else if (this.isAce()) {
      return 11;
    } else {
      return this.value;
    }
  }

  public getLowValue(): number {
    if (this.value > 9) {
      return 10;
    } else if (this.isAce()) {
      return 1;
    } else {
      return this.value;
    }
  }
}
