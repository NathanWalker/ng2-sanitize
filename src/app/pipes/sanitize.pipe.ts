import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({
  name: 'sanitize'
})
export class SanitizePipe implements PipeTransform {
  transform(value) {
    return `${value}...santization coming soon.`;
  }
}
