import { Component, OnInit, Optional } from '@angular/core';

import {ObjectDefinition} from '../../../models/object-definition.model';

import {ObjectDefinitionService} from '../../../services/object-definition.service';

@Component({
  selector: 'app-object-item-new',
  templateUrl: './object-item-new.component.html',
  styleUrls: ['./object-item-new.component.css']
})
export class ObjectItemNewComponent implements OnInit {

  
  constructor(@Optional() private objectDefinitionService: ObjectDefinitionService) { }

  ngOnInit() {
  }

  addObjectDefinition(name: HTMLInputElement, version: HTMLInputElement): boolean{
  
    this.objectDefinitionService.addObjectDefinition(name.value, Number(version.value))
  
    name.value = '';
    version.value = '';
    return false;
  }
}
