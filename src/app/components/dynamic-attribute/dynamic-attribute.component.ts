import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormArray, Validators } from '@angular/forms';
import { Attribute } from "../../models/attribute.model";

@Component({
  selector: 'dynamic-attribute',
  templateUrl: './dynamic-attribute.component.html',
  styleUrls: ['./dynamic-attribute.component.scss']
})
export class DynamicAttributeComponent implements OnInit {
  @Input() key: number;
  @Input() attribute: Attribute;
  @Input() form: FormArray;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    let attributesArray: FormArray = <FormArray>this.form.get('attributes');

    if(!attributesArray.at(this.key)) {
      let attributeGroup =  this.fb.group({
        name: [this.attribute.name, Validators.required],
        description: [this.attribute.description]
      });

      attributesArray.push(attributeGroup);
    }
  }

}
