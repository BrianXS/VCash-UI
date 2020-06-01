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


  constructor(Name?: string,
              CorporateName?: string,
              Address?: string,
              Website?: string,
              Phone?: string,
              DocumentType?: CorporateDocumentType,
              Document?: string,
              HeadquartersId?: number,
              InvoicingCityId?: number,
              FirstKeyPerson?: string,
              FirstKeyPersonTitle?: string,
              SecondKeyPerson?: string,
              SecondKeyPersonTitle?: string,
              SubClient?: boolean,
              ParentClient?: number) {
    this.Name = Name;
    this.CorporateName = CorporateName;
    this.Address = Address;
    this.Website = Website;
    this.Phone = Phone;
    this.DocumentType = DocumentType;
    this.Document = Document;
    this.HeadquartersId = HeadquartersId;
    this.InvoicingCityId = InvoicingCityId;
    this.FirstKeyPerson = FirstKeyPerson;
    this.FirstKeyPersonTitle = FirstKeyPersonTitle;
    this.SecondKeyPerson = SecondKeyPerson;
    this.SecondKeyPersonTitle = SecondKeyPersonTitle;
    this.SubClient = SubClient;
    this.ParentClient = ParentClient;
  }
}
