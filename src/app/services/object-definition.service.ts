import { Injectable } from '@angular/core';

import {ObjectDefinition} from '../models/object-definition.model';

const OBJECTDEFINITIONS: ObjectDefinition[] = [
    {id: 1, name: "Rectangle", version: 1.0 },
    {id: 2, name: "Square", version: 1.1 },
    {id: 3, name: "Circle", version: 1.0 }
  ]

@Injectable()
export class ObjectDefinitionService {

   
  constructor() { }

  public listObjectDefinitions(): ObjectDefinition[]{
    return OBJECTDEFINITIONS;
  }
}
