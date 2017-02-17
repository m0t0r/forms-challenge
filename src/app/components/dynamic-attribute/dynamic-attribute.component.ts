import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'dynamic-attribute',
  templateUrl: './dynamic-attribute.component.html',
  styleUrls: ['./dynamic-attribute.component.scss']
})
export class DynamicAttributeComponent implements OnInit {
  @Input() key: number;
  @Input() attribute: FormGroup;
  dataTypes: string[];
  formats: string[];

  ngOnInit() {
    this.dataTypes = ['STRING', 'OBJECT'];
    this.formats = ['NONE', 'OBJECT'];
  }

}
