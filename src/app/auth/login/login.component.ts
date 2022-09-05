import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup;
  usuFC: FormControl;
  pwdFC: FormControl;

  constructor(private authService: AuthService) { 
    this.usuFC = new FormControl();
    this.pwdFC = new FormControl();

    this.formGroup = new FormGroup({
      usuario: this.usuFC,
      password: this.pwdFC
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    this.authService.login({username: this.usuFC.value, password: this.pwdFC.value})
                      .subscribe(elem => console.log(elem?.token))
  }

}
