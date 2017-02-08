export class Card {
  public value: number;
  public color: number;

  constructor(value: number, color: number) {
    this.value = value;
    this.color = color;
  }

  public toString(): string {
    let str: string = '';

    switch (this.value) {
      case 1:
        str += 'Ace of ';
        break;
      case 2:
        str += 'Two of ';
        break;
      case 3:
        str += 'Three of ';
        break;
      case 4:
        str += 'Four of ';
        break;
      case 5:
        str += 'Five of ';
        break;
      case 6:
        str += 'Six of ';
        break;
      case 7:
        str += 'Seven of ';
        break;
      case 8:
        str += 'Eight of ';
        break;
      case 9:
        str += 'Nine of ';
        break;
      case 10:
        str += 'Ten of ';
        break;
      case 11:
        str += 'Jack of ';
        break;
      case 12:
        str += 'Queen of ';
        break;
      case 13:
        str += 'King of ';
        break;
    }

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
    } else if (this.value === 1) {
      return 11;
    } else {
      return this.value;
    }
  }

  public getLowValue(): number {
    if (this.value > 9) {
      return 10;
    } else if (this.value === 1) {
      return 1;
    } else {
      return this.value;
    }
  }
}
