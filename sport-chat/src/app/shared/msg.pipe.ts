import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'msg'
})
export class MsgPipe implements PipeTransform {

  transform(message: string, replacement: string = '*****'): string {
    const regex = /covid/gi;
    return message.replace(regex, replacement);
  }

}
