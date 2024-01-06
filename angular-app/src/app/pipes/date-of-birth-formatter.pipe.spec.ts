import { DateOfBirthFormatterPipe } from './date-of-birth-formatter.pipe';

describe('DateOfBirthFormatterPipe', () => {
  it('create an instance', () => {
    const pipe = new DateOfBirthFormatterPipe();
    expect(pipe).toBeTruthy();
  });
});
