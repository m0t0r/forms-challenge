export interface AbstractAttribute {
  name: string;
  description: string;
  category: string;
  deviceResourceType: string;
  defaultValue: string;
  dataType: string;
  format: string;
  enumerations: string[];
}

export class Attribute implements AbstractAttribute {
  name: string;
  description: string;
  category: string;
  deviceResourceType: string;
  defaultValue: string;
  dataType: string;
  format: string;
  enumerations: string[];

  constructor(category: string) {
    this.category = category;
  }
}

