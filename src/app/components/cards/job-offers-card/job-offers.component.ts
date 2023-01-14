import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {JobOfferInterface} from "../../../_interfaces/job-offer";

@Component({
  selector: 'app-job-offers-card',
  templateUrl: './job-offers.component.html',
  styleUrls: ['./job-offers.component.css']
})

export class JobOffersCardComponent implements OnInit {
  @Input() jobOffers!: JobOfferInterface;

  constructor() { }

  ngOnInit(): void {
  }

  OnClick() {
    console.log("toggleFullView");
  }

}
