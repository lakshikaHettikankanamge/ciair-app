class options {
  id?: number;
  text?: string;

  constructor(id: number, text: string) {
    this.id = id;
    this.text = text;
  }
}

export class researchPublicationsSortByModel {
    options: options[] = [
        new options(1, "Year - Descending"),
        new options(2, "Year - Ascending"),
    ]
}
