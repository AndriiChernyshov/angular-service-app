import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-object-item-new',
  templateUrl: './object-item-new.component.html',
  styleUrls: ['./object-item-new.component.css']
})
export class ObjectItemNewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addObjectDefinition(name: HTMLInputElement, version: HTMLInputElement): boolean{
    console.log(`Adding ${name.value} and version ${version.value}`);
    return false;
  }
}
