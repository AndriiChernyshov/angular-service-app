import { Component, OnInit, Input, HostBinding, Output, EventEmitter } from '@angular/core';

import { ObjectDefinition } from '../../../models/object-definition.model';

@Component({
  selector: 'app-object-item',
  templateUrl: './object-item.component.html',
  styleUrls: ['./object-item.component.css']
  
})
export class ObjectItemComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'rowA';
  @Input() objectItem : ObjectDefinition;
  @Output() deleteObjectDefinitionItem: EventEmitter<ObjectDefinition> = new EventEmitter<ObjectDefinition>();
  @Output() refreshItem:EventEmitter<void>=new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  private onVersionChange()
  {
    this.refreshItem.emit();
  }

  private onRemoveItem(item: ObjectDefinition):void{
    this.deleteObjectDefinitionItem.emit(item);
  }

}
