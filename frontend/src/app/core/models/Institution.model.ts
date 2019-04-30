import { InstitutionCategory } from './InstitutionCategory.model';
export class Institution {

  public id: number;
  public logo: string;

  public name: string;
  public acronym: string;
  public description: string;

  public foundation_year: number;
  public country_seat: string;

  public organe_tutelle: string;
  public areas_intervention: string;
  public target_beneficiary: string;

  public phone: string;
  public email: string;
  public web_site: string;
  public address: string;
  public localisation: string;

  public category: InstitutionCategory;

  constructor() {
    this.id = null;
    this.name = null;
    this.logo = null;
    this.acronym = null;
    this.description = null;
    this.foundation_year = null;
    this.country_seat = null;
    this.target_beneficiary = null;
    this.web_site = null;
    this.email = null;
    this.phone = null;
    this.address = null;
    this.localisation = null;
    this.category = new InstitutionCategory();
  }
}
