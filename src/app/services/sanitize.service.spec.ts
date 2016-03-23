import {
  it,
  describe,
  expect,
  inject,
  beforeEachProviders
} from 'angular2/testing';
import {SanitizeService} from './sanitize.service';

describe('SanitizeService', () => {

  beforeEachProviders(() => [SanitizeService]);

  it('should ...', inject([SanitizeService], (sanitize:SanitizeService) => {
    expect(sanitize.title).toBe('Angular 2 Library');
  }));

});
