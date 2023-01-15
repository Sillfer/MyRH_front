import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {JobOfferInterface} from "../_interfaces/job-offer";
import {Router} from "@angular/router";
import {ResponseOffer} from "../_interfaces/ResponseOffer";

@Injectable({
  providedIn: 'root'
})
export class AllJobsService {
  private ALL_JOBS_API = 'http://localhost:8081/api/job_offer';
  company = JSON.parse(localStorage.getItem("user") || "{}");
  private token = localStorage.getItem("token");
  private options = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  }
  private headers = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + this.token
    }

  }

  constructor(private Http: HttpClient) {

    }



  getPageFromUrl() {
    let url = window.location.href;
    let page = url.split('?')[1];
    if (page) {
      return page.split('=')[1];
    }
    return "1";
  }


  getAllJobsOffers(): Observable<ResponseOffer> {
    // get param page from url http://localhost:4200/job-offers?page=1
    let page = parseInt(this.getPageFromUrl());
    let url = this.ALL_JOBS_API + "?page=" + (page-1);
    return this.Http.get<ResponseOffer>(url, this.options);
    // return this.Http.get<JobOfferInterface[]>(this.ALL_JOBS_API, this.options);
  }

  addJobOffer(jobOffer: any): Observable<any> {
    let url = this.ALL_JOBS_API + "/save?companyName=" + this.company.name;
    console.log(url);
    return this.Http.post<any>(url, jobOffer, this.headers);
    //send post request to add a new job offer with adding the token in the header
    // return this.Http.post('http://localhost:8081/api/job_offer/save?companyName=mahdi', jobOffer, this.headers);
  }
}
