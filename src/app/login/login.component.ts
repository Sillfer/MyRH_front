import {Component, ErrorHandler, OnInit} from '@angular/core';
import {AuthService} from "../_services/auth.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  body = new URLSearchParams();
  options = {
    headers: new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded",
      "Access-Control-Allow-Origin": "*"
    })
  };

  constructor(private http: HttpClient, private service : AuthService){
  }




  form = new FormGroup({
    email: new FormControl(
      '', [Validators.email, Validators.required]
    ),
    password: new FormControl(
      '', [Validators.minLength(6),Validators.required]
    ),
  })


  ngOnInit() {

    const emailError = this.form.get('email');
    const passwordError = this.form.get('password');

    emailError?.valueChanges.subscribe(x => {
      this.validateEmailControl();
    })

    passwordError?.valueChanges.subscribe(x => {
      this.validatePasswordControl();
    })


  }


  private validateEmailControl(): void {
    if (this.form.controls.email.hasError('email') || this.form.controls.email.hasError('required')) {
      this.form.controls.email.setErrors({incorrect: true, message: 'Please enter a valid email'})
    }

  }

  private validatePasswordControl(): void {
    if (this.form.controls.password.hasError('minlength') || this.form.controls.password.hasError('required')) {
      this.form.controls.password.setErrors({incorrect: true, message: 'Please enter 6 characters at least'})
    }

  }

  onSubmit(): void {
    let { email, password } = this.form.value;

    let loginInfo: any = {email: email, password: password};

    if(email == '' || password == '') {
      this.form.setErrors({error:true, message: 'The email or password is invalid'})
    }else {

      this.body.set('email', loginInfo.email);
      this.body.set('password', loginInfo.password);
      console.log('i am here');


      this.service.login(this.body.toString(), this.options).subscribe(response => {
        console.log(response);
      //  store the token in local storage
        const token = response['access-token'];
        if (token) {
          localStorage.setItem('currentUser', JSON.stringify(token));
        }
      });
    }
  }


}
