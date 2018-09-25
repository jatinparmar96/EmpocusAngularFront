import { BankmasterModule } from './bankmaster.module';

describe('BankmasterModule', () => {
  let bankmasterModule: BankmasterModule;

  beforeEach(() => {
    bankmasterModule = new BankmasterModule();
  });

  it('should create an instance', () => {
    expect(bankmasterModule).toBeTruthy();
  });
});
