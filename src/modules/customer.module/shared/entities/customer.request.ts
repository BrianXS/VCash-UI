import {CorporateDocumentType} from '../enums/corporateDocumentType';

export class CustomerRequest {
  public Name: string;
  public CorporateName: string;
  public Address: string;
  public Website: string;
  public Phone: string;
  public DocumentType: CorporateDocumentType;
  public Document: string;
  public HeadquartersId: number;
  public InvoicingCityId: number;

  public FirstKeyPerson: string;
  public FirstKeyPersonTitle: string;
  public SecondKeyPerson: string;
  public SecondKeyPersonTitle: string;

  public SubClient: boolean;
  public ParentClient: number;
}
