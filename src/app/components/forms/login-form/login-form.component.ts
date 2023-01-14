import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../_services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  })

    constructor(private authService: AuthService, private router: Router) {

    }

    login() {
      this.authService.loginCompany(this.loginForm.value).subscribe( data => {
        console.log(data);
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.company));
        // window.location.href = '/company/dashboard';
        this.router.navigateByUrl('/company/dashboard');
      } );

    }

    ngOnInit(): void {

    }
}
