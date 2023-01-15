import {Component, OnInit} from '@angular/core';
import {JobOfferInterface} from "../../_interfaces/job-offer";
import {AllJobsService} from "../../_services/all-jobs.service";
import {ResponseOffer} from "../../_interfaces/ResponseOffer";
import {Router} from "@angular/router";

@Component({
  selector: 'app-job-offers',
  templateUrl: './job-offers.component.html',
  styleUrls: ['./job-offers.component.css']
})
export class JobOffersComponent implements OnInit {
  public jobOffers: JobOfferInterface[] = [];
  currentUrl = window.location.pathname;
  responseOffer: ResponseOffer = {
    content: [],
    pageSize: 0,
    pageNumber: 0,
    totalPages: 0,
    totalElements: 0
  }

  pages : number[] = [];

  constructor(private jobOfferService: AllJobsService, private router: Router) {
    this.router.events.subscribe((event) => {
      this.jobOfferService.getAllJobsOffers().subscribe((data: ResponseOffer) => {
        this.responseOffer = data;
        this.jobOffers = this.responseOffer.content;
        this.pages = Array(this.responseOffer.totalPages).fill(0).map(
          (e, i)=> i+1)
      });
    });

  }

  ngOnInit() {
    // this.jobOfferService.getAllJobsOffers().subscribe((data: ResponseOffer) => {
    //   this.responseOffer = data;
    //   this.jobOffers = this.responseOffer.content;
    //   this.pages = Array(this.responseOffer.totalPages).fill(0).map(
    //     (e, i)=> i+1)
    // });
  }

}
