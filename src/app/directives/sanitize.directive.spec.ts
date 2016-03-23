import {
  it,
  describe,
  expect,
  injectAsync,
  TestComponentBuilder,
  beforeEach,
  beforeEachProviders
} from 'angular2/testing';
import {Component} from 'angular2/core';

import {SanitizeDirective} from './sanitize.directive';

describe('SanitizeDirective', () => {
  let fixture;
  
  //setup
  beforeEachProviders(() => [
    TestComponentBuilder
  ]);

  beforeEach(injectAsync([TestComponentBuilder], tcb => {
    return tcb
      .createAsync(TestComponent)
      .then(f => fixture = f);
  }));

  it('should add a class', () => {
    let container = fixture.componentInstance,
      div = fixture.nativeElement.querySelector('div');
    expect(div.getAttribute('class')).toBe('sample-class');
  });

});

@Component({
  selector: 'test',
  directives: [SanitizeDirective],
  template: `
  <div sanitize></div>
  `
})
class TestComponent {}
