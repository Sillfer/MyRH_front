import {Component, OnInit} from '@angular/core';
import {CompanyAuth} from "../../_interfaces/company-auth";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  collapseSidebar = "hidden";
  company: CompanyAuth = JSON.parse(localStorage.getItem('user') || '{}');

  constructor() { }

  ngOnInit(): void {
  }

  toggleCollapseSidebar(classes: string) {
    this.collapseSidebar = classes;
  }

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    window.location.href = '/auth/login';
  }

}

