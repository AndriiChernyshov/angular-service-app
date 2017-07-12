import { Injectable } from '@angular/core';

import {LoginUser} from '../models/login-user.model';

@Injectable()
export class DataStorageService {

  constructor() { }

  public getLoginUser():LoginUser{
    var userSerialized = localStorage.getItem('loginUser');
    if(userSerialized)
    {
      var user = JSON.parse(userSerialized);
      return user;
    }
    return new LoginUser("", "");
  }

  public saveLoginUser(user: LoginUser):void{
    var userSerialized = JSON.stringify(user);
    localStorage.setItem('loginUser', userSerialized);
  }

  public clearLoginUser(): void{
    localStorage.removeItem('loginUser');
  }

}
