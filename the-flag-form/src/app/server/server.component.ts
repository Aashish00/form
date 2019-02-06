import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = '';
  

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000);
   }
   onCreateServer(){
      this.serverCreationStatus = 'Server was created';
    }
    

  ngOnInit() {
  }

}
