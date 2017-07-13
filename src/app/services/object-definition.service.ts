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
    console.log('listObjectDefinitions');
    return this._objects;
  }

  public listSortedObjectDefinitions(): ObjectDefinition[]{
    console.log('listSortedObjectDefinitions');
    return this._objects.sort((a:ObjectDefinition, b:ObjectDefinition) => b.version - a.version);
  }

  public addObjectDefinition(name:string, version: number)
  {
    console.log('addObjectDefinition');
    
    let maxId = 1;
    if(this._objects.length > 0){
      
      this._objects.forEach((item) => {
        if(item.id > maxId)
          maxId = item.id;
      })

      maxId+=1;
    }

    this._objects.push(new ObjectDefinition(maxId, name, version));
  }

  public removeObjectDefinition(itemToRemove:ObjectDefinition):void{
    console.log('removeObjectDefinition');
    let i = -1;

    this._objects.forEach((item, index) => {
      if (item.id === itemToRemove.id ) {
        i = index;
        return false;
      }
    });
    
    if (i > -1) {
      this._objects.splice(i, 1);
    }
  }
}
