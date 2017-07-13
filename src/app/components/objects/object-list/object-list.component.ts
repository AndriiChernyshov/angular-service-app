import { Component, OnInit, Optional } from '@angular/core';

import { ObjectDefinition } from '../../../models/object-definition.model';
import {ObjectDefinitionService} from '../../../services/object-definition.service';

@Component({
  selector: 'app-object-list',
  templateUrl: './object-list.component.html',
  styleUrls: ['./object-list.component.css']
})
export class ObjectListComponent implements OnInit {

  private objectDefinitionItems: ObjectDefinition[];
  
  constructor(@Optional() private objectDefinitionService : ObjectDefinitionService) { }

  ngOnInit() {
    console.log('ngOnInit: object-list.component' );
    this.objectDefinitionItems = this.objectDefinitionService.listSortedObjectDefinitions();
  }

  onDeleteObjectDefinitionItem(item:ObjectDefinition):void
  {
    this.objectDefinitionService.removeObjectDefinition(item);
  }

  onRefreshItem():void{
    this.objectDefinitionItems = this.objectDefinitionService.listSortedObjectDefinitions();
  }
}
