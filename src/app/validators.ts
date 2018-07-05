import { AbstractControl, ValidatorFn } from '@angular/forms';
import * as zxcvbn from 'zxcvbn';

export interface IMinStrengthValidatorResult {
  minStrength: zxcvbn.ZXCVBNFeedback;
}

export class NickelValidators {
  public static minStrength(minStrength: zxcvbn.ZXCVBNScore): ValidatorFn {
    return (control: AbstractControl): IMinStrengthValidatorResult | null => {
      let response: IMinStrengthValidatorResult | null = null;
      if (control.value && control.value.length > 0) {
        const result: zxcvbn.ZXCVBNResult = zxcvbn(control.value);
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
}
