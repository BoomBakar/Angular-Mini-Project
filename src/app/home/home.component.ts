import { Component, Inject, inject } from '@angular/core';
import { MessageDetailComponent } from '../message-detail/message-detail.component';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  //inject the user-data service using dependency injection
  service: UserDataService = inject(UserDataService);
  constructor(
  ) {
    this.data = this.service.getAll();
   }
  title:string = 'Home';
  
  name:string = '';
  email:string = '';
  message:string = '';
  isSubmitted:boolean = false;
  data:Array<any> = [];

  onSubmit():void {
    this.isSubmitted = true;
    this.service.insert({ 
      name: this.name,
      email: this.email,
      message: this.message
    });  
  }
  onDel(index:number):void {
    this.service.delete(index);
  }
}
