import { Component } from '@angular/core';
import {JobOfferInterface} from "../../_interfaces/job-offer";
import {AllJobsService} from "../../_services/all-jobs.service";

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent {
  jobOffers:JobOfferInterface[] = [];
  constructor(private jobOfferService: AllJobsService) {}

  ngOnInit() {
    this.jobOfferService.getAllJobsOffers().subscribe(data =>
      // slice the array to get the last 5 elements
      this.jobOffers = data.slice(Math.max(data.length - 3, 0))
    );
  }
}
