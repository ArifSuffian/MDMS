import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataStorage } from 'src/app/helper';
import { AccountService,AlertService } from 'src/app/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loadingPanelVisible = false;

  loginForm: FormGroup;
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private accountservice: AccountService,
    private alertService: AlertService
  ) {
    this.loginForm = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';

  }

  ngOnInit(): void { }

  // convenience getter for easy access to form fields
  get lf() { return this.loginForm.controls; }

  submitLogin(): void {

    this.loginForm.markAllAsTouched();

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loadingPanelVisible = true;

    this.accountservice
      .login(this.lf['username'].value, this.lf['password'].value)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.loadingPanelVisible = false;
          // set login time
          DataStorage.setUserId(res.Id)
          DataStorage.setName(res.Name);
          DataStorage.setEmail(res.Email);
          DataStorage.setAccessLevel(res.AccessLevel);
          this.router.navigate([this.returnUrl]);
        },
        error: (err) => {
          this.loadingPanelVisible = false;
          if (err.error) this.alertService.error(err.error.message);
          else {
            this.alertService.error('Login failed. Please try again.');
          }
        },
        complete: () => {
          console.log('User Sign In Complete')
        }
      });
  }
}
