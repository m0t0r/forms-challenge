import { Component, Input, OnInit } from '@angular/core';
import { Attribute } from '../../models/attribute.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'dynamic-attribute',
  templateUrl: './dynamic-attribute.component.html',
  styleUrls: ['./dynamic-attribute.component.scss']
})
export class DynamicAttributeComponent implements OnInit {
  @Input() attribute: Attribute;
  @Input() form: FormGroup;


  constructor() { }

  ngOnInit() {
  }

}
