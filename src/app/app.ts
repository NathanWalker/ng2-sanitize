import {Component} from 'angular2/core';

import '../style/app.scss';

import {SanitizeDirective} from './directives/sanitize.directive';
import {SanitizePipe} from './pipes/sanitize.pipe';
import {SanitizeService} from './services/sanitize.service';

/*
 * Library Demo
 */
@Component({
  selector: 'app',
  providers: [SanitizeService],
  directives: [SanitizeDirective],
  pipes: [SanitizePipe],
  styles: [require('./app.scss')],
  template: require('./app.html')
})
export class App {
  pipeTest: string = 'Create an amazing community by contributing a library';
  url: string = 'https://github.com/preboot/angular2-library-seed';

  constructor(public sanitize: SanitizeService) {
  }
}
