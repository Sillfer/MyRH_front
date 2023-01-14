import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../_services/auth.service";

@Component({
  selector: 'app-agent-login-form',
  templateUrl: './agent-login-form.component.html',
  styleUrls: ['./agent-login-form.component.css']
})
export class AgentLoginFormComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  constructor(private _authService: AuthService) {

  }


  login() {
    this._authService.loginAgent(this.loginForm.value).subscribe(data => {
      // store token in local storage
      localStorage.setItem('token', data.token);
      localStorage.setItem('admin', JSON.stringify(data.agent));

      window.location.href = '/agent/dashboard';
    });
  }


  ngOnInit(): void {
  }

}
