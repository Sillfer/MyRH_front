import {Company} from './company';

export interface JobOfferInterface {
  id: number;
  title: string;
  description: string;
  location: string;
  salary: string;
  company: Company;
  profile: string;
  educationLevel: string;
  experienceLevel: number;
  contractType: string;
  status: string;
}
