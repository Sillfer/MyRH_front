import {JobOfferInterface} from "./job-offer";

export interface ResponseOffer {
  content: JobOfferInterface[];
  pageSize: number;
  pageNumber: number;
  totalPages:   number;
  totalElements: number;
}
