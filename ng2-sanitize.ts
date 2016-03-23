// for standard export at bottom
import {SanitizeDirective} from './src/app/directives/sanitize.directive';
import {SanitizePipe} from './src/app/pipes/sanitize.pipe';
import {SanitizeService} from './src/app/services/sanitize.service';

// for manual imports
export * from './src/app/directives/sanitize.directive';
export * from './src/app/pipes/sanitize.pipe';
export * from './src/app/services/sanitize.service';

// provides standard for consumption via things like angular-cli
export default {
  directives: [SanitizeDirective],
  pipes: [SanitizePipe],
  providers: [SanitizeService]
}
