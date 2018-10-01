import { LoggerModule } from './logger.module';

describe('LoggerModule', () => {
  let loggerModule: LoggerModule;

  beforeEach(() => {
    loggerModule = new LoggerModule();
  });

  it('should create an instance', () => {
    expect(loggerModule).toBeTruthy();
  });
});
