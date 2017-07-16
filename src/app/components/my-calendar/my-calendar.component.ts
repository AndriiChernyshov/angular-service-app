import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Form } from '@angular/forms';

import {DateFormattingType} from '../../models/date-formatting-type.model'

@Component({
  selector: 'app-my-calendar',
  templateUrl: './my-calendar.component.html',
  styleUrls: ['./my-calendar.component.css']
})
export class MyCalendarComponent implements OnInit {
  private dateFormattingTypes : DateFormattingType[] = 
  [
    {code: 'shortDate', name: 'short date'},
    {code: 'mediumDate', name: 'mEdIum date'},
    {code: 'fullDate', name: 'FULL Date'}
  ];

  private selectedDate : Date;
  private selectedFormat: string = this.dateFormattingTypes[0].code;

  constructor() {
    this.selectedDate = new Date();
   }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges)
  {
    console.log('onChanges');
  }
  
  private onChangeFormatting(formatType): void{
    console.log('onChange ' + formatType);
    this.selectedFormat = formatType;
  }

  private onKeyUp():void{
    console.log('onKeyUp');
  }
}
