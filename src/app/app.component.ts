import { Component, OnInit } from '@angular/core';
import { Attribute } from './models/attribute.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'Nested Forms Challenge';
  public categories: string[] = [];
  public attributes: Attribute[] = [];

  ngOnInit(): void {
    this.categories = ['Tab 1', 'Tab 2', 'Tab 3', 'Tab 4', 'Tab 5'];
    this.attributes = [];
  }
}
