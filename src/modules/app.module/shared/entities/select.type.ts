export class SelectType {
  additional: any;
  disabled: boolean;
  id: string;
  text: string;


  constructor(additional?: any,
              disabled?: boolean,
              id?: string,
              text?: string) {
    this.additional = additional;
    this.disabled = disabled;
    this.id = id;
    this.text = text;
  }
}
