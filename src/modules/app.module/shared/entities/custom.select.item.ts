export class CustomSelectItem {
  public id: number;
  public name: string;
  public disabled = false;

  constructor(id?: number, name?: string) {
    this.id = id;
    this.name = name;
  }
}
