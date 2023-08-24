import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  messages:Array<any> = [];

  insert(message :{name:string,email:string,message:string}): void {
    this.messages.push(message);
  }
  getAll():Array<any> {
    return this.messages;
  }
  delete(index:number):void {
    this.messages.splice(index,1);
  }
  constructor() { }

}