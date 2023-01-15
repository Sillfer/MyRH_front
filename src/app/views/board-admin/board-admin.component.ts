import {Component, OnInit} from '@angular/core';
import {JobOfferInterface} from "../../_interfaces/job-offer";
import {AllJobsService} from "../../_services/all-jobs.service";
import {ResponseOffer} from "../../_interfaces/ResponseOffer";
import {Router} from "@angular/router";

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {
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
    // this.jobOfferService.getAllJobsOffers().subscribe(data =>
      // slice the array to get the last 5 elements
      // this.jobOffers = data.slice(Math.max(data.length - 3, 0))


  }
}
