import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { zxcvbnValidator } from '@mralexandernickel/angular-zxcvbn';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public inputType = 'password';

  public password: FormControl = new FormControl(this.password, [
    zxcvbnValidator(2)
  ]);

  public showPassword(): void {
    this.inputType = 'text';
  }

  public hidePassword(): void {
    this.inputType = 'password';
  }
}
