import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  @Input()anotherUser: {firstName:string,lastName:string,location:string,Job:string,date:string};

  showContent = true;
  servernameContent = "Your firstName is";
  serverlastNameContent = "Your lastName is";
  serverlocationContent = "Your server location is";
  serverJobContent = "Your Job is";
  serverDate = "The date is bla bla bla...";

  changeUserName = false;

  userName = "Ashis";
  onKeydown(event):void{
    console.log(event.key);
    if (event.key === "Enter") {
      this.changeUserName = false;
    }
    
  }

  constructor() { }

  ngOnInit() {
  }

}
