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

  it('Should return the same feedback-property as when calling zxcvbn directly', () => {
    const password = '123';
    const resultZXCVBN = zxcvbn(password).feedback;
    const resultValidator = zxcvbnValidator(2)(new FormControl(password));
    expect(resultValidator.zxcvbn).toEqual(resultZXCVBN);
  });
});
