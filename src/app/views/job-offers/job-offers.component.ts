import {Component, OnInit} from '@angular/core';
import {JobOfferInterface} from "../../_interfaces/job-offer";
import {AllJobsService} from "../../_services/all-jobs.service";

@Component({
  selector: 'app-job-offers',
  templateUrl: './job-offers.component.html',
  styleUrls: ['./job-offers.component.css']
})
export class JobOffersComponent implements OnInit {
  public jobOffers: JobOfferInterface[] = [];

  constructor(private jobOfferService: AllJobsService) {

  }

  ngOnInit() {
    this.jobOfferService.getAllJobsOffers().subscribe(data => this.jobOffers = data);
  }

  // toggleFullView() {
  //   console.log("toggleFullView");
  // }

}
