import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private isUserLoggin;
  private username;
  constructor() { 
    this.isUserLoggin=false;
  }

  setUserLoggenIn(){
    this.isUserLoggin=true;
  }


  getUserLoggenIn(){
   return this.isUserLoggin;
  }
}

