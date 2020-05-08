import {PersonalDocumentType} from "../enums/personal.document.type";

export class CashierRequest {
  public FullName: string;
  public DocumentType: PersonalDocumentType;
  public Document: string;
  public CustomerId: number;

  constructor(FullName?: string,
              DocumentType?: PersonalDocumentType,
              Document?: string,
              CustomerId?: number) {
    this.FullName = FullName;
    this.DocumentType = DocumentType;
    this.Document = Document;
    this.CustomerId = CustomerId;
  }
}

