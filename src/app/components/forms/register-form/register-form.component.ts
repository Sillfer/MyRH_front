import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {FormBuilder, Validators} from "@angular/forms";
import {AuthService} from "../../../_services/auth.service";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit{

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
  }

  registerForm = this.formBuilder.group({
    name: ['', Validators.required],
    phone: ['', Validators.required, Validators.minLength(10)],
    email: ['' , [Validators.required, Validators.email]],
    password: ['', Validators.required],
    address: ['', Validators.required],
    city: ['', Validators.required],
    logo: ['']
  });

  register() {
    this.authService.registerCompany(this.registerForm.value).subscribe( data => {
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(this.registerForm.value));
      window.location.href = '/';
    } );
  }

  getFilePath(event: any) {
    this.registerForm.patchValue({
      logo: event.target.files[0].name
    });
  }
  ngOnInit(): void {
  }
}
