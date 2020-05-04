import {Select2OptionData} from "ng-select2";

export class SelectType implements Select2OptionData{
  additional: any;
  children: Array<Select2OptionData>;
  disabled: boolean;
  id: string;
  text: string;


  constructor(additional?: any,
              children?: Array<Select2OptionData>,
              disabled?: boolean,
              id?: string,
              text?: string) {
    this.additional = additional;
    this.children = children;
    this.disabled = disabled;
    this.id = id;
    this.text = text;
  }
}
