import { Component, OnInit, Input } from '@angular/core';

import { ObjectDefinition } from '../../../models/object-definition.model';

@Component({
  selector: 'app-object-item',
  templateUrl: './object-item.component.html',
  styleUrls: ['./object-item.component.css']
})
export class ObjectItemComponent implements OnInit {

  @Input() objectItem : ObjectDefinition;
  
  constructor() { }

  ngOnInit() {
  }

}
