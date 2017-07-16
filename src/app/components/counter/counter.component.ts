import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  private counter: number = 0;
  constructor() { }

  ngOnInit() {
  }

  onIncrease():void{
    if(this.counter >= 100)
      return;
    this.counter++;
  }

  onDecrease():void{
    if(this.counter <= 0)
      return;
    this.counter--;
  }

}
