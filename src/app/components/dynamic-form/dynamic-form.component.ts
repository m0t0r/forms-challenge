import { Component, Input, OnInit } from '@angular/core';
import { Attribute } from '../../models/attribute.model';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { MdTabChangeEvent } from '@angular/material';

@Component({
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
  @Input() attributes: Attribute[];
  @Input() categories: string[];
  public filteredAttributes: FormGroup[];
  public selectedCategory: string;
  public form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({attributes: this.fb.array(
      this.attributes.map((attribute: Attribute) => {
        return this.attributeToFormGroup(attribute);
      })
    )});

    this.filterAttributesByCategory(this.categories[0]);
    this.selectedCategory = this.categories[0];
  }

  attributeToFormGroup(attribute: Attribute): FormGroup {
    return this.fb.group({
      name: [attribute.name, [Validators.required]],
      description: [attribute.description],
      category: [attribute.category],
      deviceResourceType: [{value: attribute.deviceResourceType, disabled: true}],
      defaultValue: [attribute.defaultValue],
      dataType: [attribute.dataType],
      format: [attribute.format],
      enumerations: [attribute.enumerations]
    });
  }

  filterAttributes(event: MdTabChangeEvent): void {
    let category = event.tab.textLabel;
    this.selectedCategory = category;
    this.filterAttributesByCategory(category);
  }

  filterAttributesByCategory(category: string) {
    let attributes = this.form.get('attributes') as FormArray;

    this.filteredAttributes = <FormGroup[]>attributes.controls
      .filter((attributeControl: FormGroup) => {
        return attributeControl.get('category').value === category;
      });
  }

  addNewAttribute(e: Event) {
    e.preventDefault();

    let attributes = this.form.get('attributes') as FormArray;
    let newAttribute = new Attribute(this.selectedCategory);
    let attributeControl = this.attributeToFormGroup(newAttribute);

    attributes.push(attributeControl);
    this.filterAttributesByCategory(this.selectedCategory);
  }
}
