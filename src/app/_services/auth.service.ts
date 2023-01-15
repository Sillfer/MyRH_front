import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private AUTH_API_LOGIN = 'http://localhost:8081/api/auth';
  private options = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }

  constructor(private http: HttpClient, private router: Router) {

  }

  registerCompany(value: any): Observable<any> {
    return this.http.post<any>(this.AUTH_API_LOGIN + '/register', value, this.options);
  }

  loginAgent(value: {}): Observable<any> {
    return this.http.post<any>(this.AUTH_API_LOGIN + '/authenticate', value, this.options);
  }

  loginCompany(value: {}): Observable<any> {
    return this.http.post<any>(this.AUTH_API_LOGIN + '/authenticate', value, this.options);
  }

  logout() {
    localStorage.removeItem("admin");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    this.router.navigateByUrl('/auth/login');
  }


}


