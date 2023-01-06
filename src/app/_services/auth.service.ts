import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private AUTH_API_LOGIN = 'http://localhost:8099/login';

  constructor(private http: HttpClient) {
  }

  login(loginInfo: string, headers: { headers: HttpHeaders }) {

    console.log('here');

    return this.http.post(this.AUTH_API_LOGIN, loginInfo, headers).pipe(
      map((res: any) => {
        console.log(res);
        const token = res['token'];
        if (token) {
          localStorage.setItem('currentUser', JSON.stringify(token));
        }
        return res;
      })
    )
  }
}


