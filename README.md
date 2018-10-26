[![Build Status](https://travis-ci.org/mralexandernickel/angular-zxcvbn.svg?branch=master)](https://travis-ci.org/mralexandernickel/angular-zxcvbn)

Angular ZXCVBN
==============

This module is a simple wrapper in form of an angular validator-function around
dropbox' [zxcvbn](https://github.com/dropbox/zxcvbn).

## How to use

Install this module by adding it as a dependency via yarn, npm or ng:

```shell
yarn add @mralexandernickel/angular-zxcvbn
npm install @mralexandernickel/angular-zxcvbn
ng add @mralexandernickel/angular-zxcvbn
```

Afterwards you can use it in your angular components like this:

```typescript    
import { zxcvbnValidator } from '@mralexandernickel/angular-zxcvbn';

@Component({
  // your regular component definition
})
export class SomeComponent {
  public password: FormControl = new FormControl(this.password, [
    zxcvbnValidator(2)
  ]);
}
```

To show some feedback to you user, you can get the desired information like
from every other angular-validator, for example:

```html
<div
  class="feedback"
  *ngIf="password.errors && password.errors.zxcvbn">
  <div
    class="warning"
    *ngIf="password.errors.zxcvbn.warning">
    <h3>Warning</h3>
    <p>{{ password.errors.zxcvbn.warning }}</p>
  </div>
  <div
    class="suggestions"
    *ngIf="password.errors.zxcvbn.suggestions">
    <h3>Suggestions</h3>
    <p *ngFor="let suggestion of password.errors.zxcvbn.suggestions">
      {{ suggestion }}
    </p>
  </div>
</div>
```