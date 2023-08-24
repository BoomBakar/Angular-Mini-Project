
import { Component,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'app-message-detail',
  templateUrl: './message-detail.component.html',
  styleUrls: ['./message-detail.component.scss']
})
export class MessageDetailComponent {
   @Input()
   message:any = {};
   @Input()
   index:number = -1;
  
   @Output()
   delMsg:EventEmitter<number> = new EventEmitter<number>();
   
   deleteMessage():void {
      this.delMsg.emit(this.index);
    }
}
