import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AllJobsService} from "../../../_services/all-jobs.service";
import {Router} from "@angular/router";

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
      // when the addJobOffer method is called a pop up will appear that asks the use if they want to add another job offer if yes the form will be cleared and the user can add another job offer if no the user will be redirected to the dashboard
      if (confirm("Job offer added successfully, do you want to add another job offer?")) {
        this.jobOfferForm.reset();
      } else {
        this.router.navigateByUrl('/company/dashboard');
      }
      console.log(data);
    });


  }
}


