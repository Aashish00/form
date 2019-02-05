import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverId = 10;
  serverStatus = true;

  newServerStatus(){
    return this.serverStatus;

  }

  constructor() { }

  ngOnInit() {
  }

}
