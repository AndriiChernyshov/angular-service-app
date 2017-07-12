import { Injectable } from '@angular/core';

import {ObjectDefinition} from '../models/object-definition.model';

const OBJECTDEFINITIONS: ObjectDefinition[] = [
    {id: 1, name: "Rectangle", version: 1.0 },
    {id: 2, name: "Square", version: 1.1 },
    {id: 3, name: "Circle", version: 1.0 }
  ]

@Injectable()
export class ObjectDefinitionService {

  private _objects : ObjectDefinition[];
   
  constructor() { 
    this._objects = OBJECTDEFINITIONS;
  }

  public listObjectDefinitions(): ObjectDefinition[]{
    return this._objects;
  }

  public addObjectDefinition(name:string, version: number)
  {
    var id: number = 0;
    if(this._objects.length > 0)
      id = this._objects[this._objects.length-1].id +1;
    this._objects.push(new ObjectDefinition(id, name, version))
  }
}
