import {PersonalDocumentType} from "../enums/personal.document.type";

export class CashierResponse {
  public id: number;
  public fullName: string;
  public documentType: PersonalDocumentType;
  public document: string;
  public customerId: number;
  public customer: string;

  constructor(Id?: number,
              FullName?: string,
              DocumentType?: PersonalDocumentType,
              Document?: string,
              CustomerId?: number,
              Customer?: string) {
    this.id = Id;
    this.fullName = FullName;
    this.documentType = DocumentType;
    this.document = Document;
    this.customerId = CustomerId;
    this.customer = Customer;
  }
}

