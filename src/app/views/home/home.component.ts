import { Component } from '@angular/core';
import {JobOfferInterface} from "../../_interfaces/job-offer";
import {AllJobsService} from "../../_services/all-jobs.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  jobOffers:JobOfferInterface[] = [];
  constructor(private jobOfferService: AllJobsService) {}

  ngOnInit() {
    this.jobOfferService.getAllJobsOffers().subscribe(data =>
      // slice the array to get the last 5 elements
      this.jobOffers = data.slice(Math.max(data.length - 3, 0))
    );
  }

}
