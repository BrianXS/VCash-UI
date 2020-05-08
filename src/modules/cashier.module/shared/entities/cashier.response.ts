import {PersonalDocumentType} from "../enums/personal.document.type";

export class CashierResponse {
  public Id: number;
  public FullName: string;
  public DocumentType: PersonalDocumentType;
  public Document: string;
  public CustomerId: number;
  public Customer: string;

  constructor(Id?: number,
              FullName?: string,
              DocumentType?: PersonalDocumentType,
              Document?: string,
              CustomerId?: number,
              Customer?: string) {
    this.Id = Id;
    this.FullName = FullName;
    this.DocumentType = DocumentType;
    this.Document = Document;
    this.CustomerId = CustomerId;
    this.Customer = Customer;
  }
}

