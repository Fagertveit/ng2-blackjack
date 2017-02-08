import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'blackjack'
})
export class BlackjackPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
