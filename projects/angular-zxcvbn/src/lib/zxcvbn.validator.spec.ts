import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import * as zxcvbn_ from 'zxcvbn';
import { zxcvbnValidator } from './zxcvbn.validator';

const zxcvbn = zxcvbn_; // fix for rollup-error 'cannot call namespace...'

describe('Angular ZXCVBN', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ]
    });
  });

  it('Should return null if no value is given', () => {
    const resultValidator = zxcvbnValidator(2)(new FormControl(''));
    expect(resultValidator).toBe(null);
  });

  it('Should return null if resulting score is larger or equal the given minStrength', () => {
    const password = '123testPW'; // we know that this password will score "2" in zxcvbn
    const resultValidator = zxcvbnValidator(2)(new FormControl(password));
    expect(resultValidator).toBe(null);
  });

  it('Should return the same feedback-property as when calling zxcvbn directly', () => {
    const password = '123';
    const resultZXCVBN = zxcvbn(password).feedback;
    const resultValidator = zxcvbnValidator(2)(new FormControl(password));
    expect(resultValidator.zxcvbn).toEqual(resultZXCVBN);
  });
});
