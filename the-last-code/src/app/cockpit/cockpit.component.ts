import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output()ServerCreated = new EventEmitter<{serverName:string,serverContent:string}>();
  @Output()blueprintCreated = new EventEmitter<{serverName:string,serverContent:string}>();
  newServerName = '';
   newServerContent = '';

  constructor() { }

  ngOnInit() {
  }
  onAddServer(newServerName){
    this.ServerCreated.emit({
      
      serverName: newServerName.value,
      
      serverContent: this.newServerContent

    })
  }
  onAddBlueprint(newServerName){
    this.blueprintCreated.emit({
      serverName: newServerName.value,
      serverContent: this.newServerContent
    })
  }




}
