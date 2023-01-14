import {Component, Input, OnInit} from '@angular/core';
import {JobOfferInterface} from "../../../_interfaces/job-offer";

@Component({
  selector: 'app-card-table',
  templateUrl: './card-table.component.html',
  styleUrls: ['./card-table.component.css']
})
export class CardTableComponent implements OnInit {
  @Input() jobOffer!: JobOfferInterface;

  constructor() {}

  ngOnInit(): void {

  }
}
