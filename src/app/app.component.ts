import { Component, OnInit } from '@angular/core';
import { Attribute } from './models/attribute.model';
import { MdTabChangeEvent } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'Nested Forms Challenge';
  public tabs: string[]= ['Tab 1', 'Tab 2', 'Tab 3', 'Tab 4', 'Tab 5'];
  public selectedCategory: string= '';
  filteredAttributes: Attribute[] = [];
  public attributes: Attribute[] = [
    {name: 'Attribute 1', category: 'Tab 1', description: ''},
    {name: 'Attribute 2', category: 'Tab 1', description: ''},
    {name: 'Attribute 1', category: 'Tab 2', description: ''}
  ];

  ngOnInit(): void {
    this.filterAttributesByCategory(this.tabs[0]);
    this.selectedCategory = this.tabs[0];
  }

  filterAttributes(event: MdTabChangeEvent): void {
    let category = event.tab.textLabel;
    this.selectedCategory = category;
    this.filterAttributesByCategory(category);
  }

  filterAttributesByCategory(category: string) {
    this.filteredAttributes = this.attributes.filter((attribute: Attribute) => {
      return attribute.category === category;
    });
  }
}
