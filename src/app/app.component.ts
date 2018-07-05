import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NickelValidators } from './validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public inputType = 'password';

  public password: FormControl = new FormControl(this.password, [
    NickelValidators.minStrength(2)
  ]);

  public showPassword(): void {
    this.inputType = 'text';
  }

  public hidePassword(): void {
    this.inputType = 'password';
  }
}
