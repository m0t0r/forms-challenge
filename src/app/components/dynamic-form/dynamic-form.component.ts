import { Component, Input, OnInit } from '@angular/core';
import { Attribute } from '../../models/attribute.model';
import {FormGroup, FormBuilder, FormControl} from '@angular/forms';

@Component({
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
  @Input() attributes: Attribute[] = [];
  form: FormGroup;


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.toFormGroup(this.attributes);
  }

  toFormGroup(attributes: Attribute[]): FormGroup {
    let group = {};

    attributes.forEach((attribute: Attribute) => {
      let attributeGroup = {};

      Object.keys(attribute).forEach(attributeKey => {
        attributeGroup[attributeKey] = new FormControl();
      });

      group[attribute.key] = new FormGroup(attributeGroup);
    });

    return this.fb.group(group);
  }

}
