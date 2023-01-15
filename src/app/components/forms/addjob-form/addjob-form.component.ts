import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AllJobsService} from "../../../_services/all-jobs.service";
import {Router} from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: 'app-addjob-form',
  templateUrl: './addjob-form.component.html',
  styleUrls: ['./addjob-form.component.css']
})
export class AddjobFormComponent implements OnInit {
  user = JSON.parse(localStorage.getItem("user") || '{}');

  constructor(private formBuilder: FormBuilder, private jobOfferService: AllJobsService, private router: Router) {
  }


  jobOfferForm = this.formBuilder.group({
    title: ["", Validators.required],
    description: ["", Validators.required],
    salary: ["", Validators.required],
    location: ["", Validators.required],
    // company: {},
    profile: ["", Validators.required],
    educationLevel: ["", Validators.required],
    experienceLevel: [""],
    contractType: ["", Validators.required],
  });

  ngOnInit(): void {
    if (localStorage.getItem("token") === null) {
      this.router.navigateByUrl('/auth/login');
    }
  }

  addJobOffer() {
    this.jobOfferService.addJobOffer(this.jobOfferForm.value).subscribe((data) => {
        this.router.navigateByUrl('/company/dashboard');
      console.log(data);
    });
  }

  // resetForm($event?: Swal.DismissReason) {
  //   this.jobOfferForm.reset();
  //   this.router.navigateByUrl('/company/add-job');
  // }
}


