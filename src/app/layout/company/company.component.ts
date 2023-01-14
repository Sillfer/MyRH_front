import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  //  check if local storage has token item else redirect to login page
      if(!localStorage.getItem('user')){
          window.location.href = '/auth/login';
      }
  }

}


