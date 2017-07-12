import { Component, OnInit, Input } from '@angular/core';

import {LoginUser} from '../../models/login-user.model';
import {DataStorageService} from '../../services/data-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private loginUser : LoginUser;

  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.loginUser = this.dataStorageService.getLoginUser();
  }

  saveUser():void{
    this.dataStorageService.saveLoginUser(this.loginUser);
  }

  clearUser():void{
    this.dataStorageService.clearLoginUser();
    this.loginUser = this.dataStorageService.getLoginUser();
  }

}
