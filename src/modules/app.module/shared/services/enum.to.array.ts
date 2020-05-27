import {CustomSelectItem} from '../entities/custom.select.item';

export class EnumToArray {
  convert(enumerator: any): CustomSelectItem[] {
    const result: CustomSelectItem[] = [];
    let i = 0;

    Object.keys(enumerator)
      .filter(key => !Number(key) && key !== '0')
      .forEach(key => {
        result.push(new CustomSelectItem(i, key));
        i++;
      });

    return result;
  }
}
