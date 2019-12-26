import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errMsg = false;
  loginForm = new FormGroup({
    username: new FormControl('demo', Validators.required),
    password: new FormControl('demo', Validators.required)
  });
  constructor(private router: Router) { }

  ngOnInit() {
  }

  login() {
    if (this.loginForm.valid) {
      const { username, password} = this.loginForm.controls;
      if (username.value === 'demo' && password.value === 'demo') {
        this.errMsg = false;
        this.router.navigate(['/dashboard']);
      } else {
        this.errMsg = true;
      }
      console.log(this.loginForm.value);
    }
  }

}
