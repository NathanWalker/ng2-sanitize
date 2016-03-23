import {
  it,
  describe,
  expect,
  inject,
  beforeEach,
  beforeEachProviders
} from 'angular2/testing';
import {SanitizePipe} from './sanitize.pipe';

describe('Pipe: SanitizePipe', () => {
  let pipe;
  
  //setup
  beforeEachProviders(() => [
    SanitizePipe
  ]);
  
  beforeEach(inject([SanitizePipe], p => {
    pipe = p;
  }));
  
  //specs
  it('should sanitize', () => {
    expect(pipe.transform('Anything could be created')).toBe(`Anything could be created...santization coming soon.`);
  });
}) 
