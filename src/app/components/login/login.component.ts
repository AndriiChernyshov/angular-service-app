import { Component, OnInit, Input } from '@angular/core';


import {DataStorageService} from '../../services/data-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private name : string;
  private userName: string;

  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.userName = this.dataStorageService.getName();
  }

  saveUser():void{
    this.dataStorageService.saveName(this.userName);
  }

  clearUser():void{
    this.dataStorageService.clearUser();
    this.userName = this.dataStorageService.getName();
  }

}
