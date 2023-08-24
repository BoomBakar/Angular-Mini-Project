import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title:string = 'Home';
  constructor() { }
  name:string = '';
  email:string = '';
  message:string = '';
  isSubmitted:boolean = false;
  data:Array<any> = [];

  onSubmit():void {
    this.isSubmitted = true;
    this.data.push({
      name: this.name,
      email: this.email,
      message: this.message
    });
    console.log(`Thank you for your message! ${this.name} ${this.email} ${this.message}`);
  }
}
