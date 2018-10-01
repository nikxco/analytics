import { LoggerDirective } from './log.directive';

describe('LoggerDirective', () => {
  it('should create an instance', () => {
    const directive = new LoggerDirective(null, null);
    expect(directive).toBeTruthy();
  });
});
