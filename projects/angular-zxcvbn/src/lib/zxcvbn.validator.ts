import { AbstractControl, ValidatorFn } from '@angular/forms';
import * as zxcvbn_ from 'zxcvbn';

const zxcvbn = zxcvbn_; // fix for rollup-error "cannot call namespace..."

export interface IZXCVBNValidatorResult {
  zxcvbn: zxcvbn_.ZXCVBNFeedback;
}

export function zxcvbnValidator(minStrength: zxcvbn_.ZXCVBNScore): ValidatorFn {
  return (control: AbstractControl): IZXCVBNValidatorResult | null => {
    let response: IZXCVBNValidatorResult | null = null;
    if (control.value && control.value.length > 0) {
      const result: zxcvbn_.ZXCVBNResult = zxcvbn(control.value);
      if (result.score < minStrength) {
        response = {
          'zxcvbn': result.feedback
        };
      }
    }

    return response;
  };
}
