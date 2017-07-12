import { Component, OnInit } from '@angular/core';

import { ObjectDefinition } from '../../../models/object-definition.model';
import {ObjectDefinitionService} from '../../../services/object-definition.service';

@Component({
  selector: 'app-object-list',
  templateUrl: './object-list.component.html',
  styleUrls: ['./object-list.component.css']
})
export class ObjectListComponent implements OnInit {

  private objectDefinitionItems: ObjectDefinition[];
  
  constructor(private objectDefinitionService : ObjectDefinitionService) { }

  ngOnInit() {
    console.log('ngOnInit: object-list.component' );
    this.objectDefinitionItems = this.objectDefinitionService.listObjectDefinitions();
  }

  updateObjectDefinition():void{
    console.log(this.objectDefinitionItems );
    console.log(this.objectDefinitionService.listObjectDefinitions());
     //this.objectDefinitionItems = this.objectDefinitionService.listObjectDefinitions();
  }
}
