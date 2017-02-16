import {Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Attribute } from '../../models/attribute.model';
import {FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnChanges {
  @Input() attributes: Attribute[] = [];
  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['attributes'].currentValue) {
      this.form = this.fb.group({attributes: this.fb.array([])});
    }
  }
}
