import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-primary-navbar',
  templateUrl: './primary-navbar.component.html',
  styleUrls: ['./primary-navbar.component.css']
})
export class PrimaryNavbarComponent  implements OnInit {
  navbarOpen = false;

  constructor() {
  }

  ngOnInit(): void {

  }

  setNavbarOpen(){
    this.navbarOpen = !this.navbarOpen;
  }

}
