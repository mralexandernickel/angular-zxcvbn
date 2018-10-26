import { AbstractControl, ValidatorFn } from '@angular/forms';
import * as zxcvbn_ from 'zxcvbn';

const zxcvbn = zxcvbn_; // fix for rollup-error "cannot call namespace..."

export interface IMinStrengthValidatorResult {
  minStrength: zxcvbn_.ZXCVBNFeedback;
}

export function zxcvbnValidator(minStrength: zxcvbn_.ZXCVBNScore): ValidatorFn {
  return (control: AbstractControl): IMinStrengthValidatorResult | null => {
    let response: IMinStrengthValidatorResult | null = null;
    if (control.value && control.value.length > 0) {
      const result: zxcvbn_.ZXCVBNResult = zxcvbn(control.value);
      if (result.score < minStrength) {
        response = {
          'minStrength': {
            'warning': result.feedback.warning,
            'suggestions': result.feedback.suggestions
          }
        };
      }
    }

    return response;
  };
}
