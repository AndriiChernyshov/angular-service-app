import { Injectable } from '@angular/core';

@Injectable()
export class DataStorageService {

  constructor() { }

  public getName(): string{
    return localStorage.getItem('userName');
  }

  public saveName(userName: string): void{
    localStorage.setItem('userName', userName);
  }

  public clearUser(): void{
    localStorage.removeItem('userName');
  }

}
