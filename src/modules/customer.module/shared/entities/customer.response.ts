import {CorporateDocumentType} from '../enums/corporateDocumentType';

export class CustomerResponse {
  public id: number;
  public name: string;
  public corporateName: string;
  public address: string;
  public website: string;
  public phone: string;

  public documentType: CorporateDocumentType;
  public document: string;

  public headquartersId: number;
  public headquarters: string;

  public invoicingCityId: number;
  public invoicingCity: string;

  public firstKeyPerson: string;
  public firstKeyPersonTitle: string;

  public secondKeyPerson: string;
  public secondKeyPersonTitle: string;

  public subClient: boolean;
  public parentClient: number;

  public Offices: string[];
  public Cashiers: string[];
}


