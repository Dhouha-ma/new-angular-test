import { CapitalizePipe } from './capitalize-pipe';

describe('CapitalizePipe', () => {
  const pipe = new CapitalizePipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return empty string when value is null', () => {
    expect(pipe.transform(null)).toBe('');
  });

  it('should return capitalized value', () => {
    expect(pipe.transform('dhouha')).toBe('Dhouha');
  });
});
