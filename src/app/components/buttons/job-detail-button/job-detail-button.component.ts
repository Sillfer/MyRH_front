import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-job-detail-button',
  templateUrl: './job-detail-button.component.html',
  styleUrls: ['./job-detail-button.component.css']
})
export class JobDetailButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  OnClick() {
    console.log("toggleFullView");
  }

}


