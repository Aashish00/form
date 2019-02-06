import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type:'server',name:'Ashish',content:'Jusst a text'}];
  evenNumbers = [2,4,8,10,6];
  oddNumbers = [1,3,5,7,9];
  

  onServerCreated(serverData: {serverName:string, serverContent:string}){
    this.serverElements.push({
      type:'server',
      name:serverData.serverName,
      content:serverData.serverContent
    }) 
  }
  onblueprintCreated(blueprintData: {serverName:string,serverContent:string}){
    this.serverElements.push({
      type:'blueprint',
      name:blueprintData.serverName,
      content:blueprintData.serverContent

    })
  }

}


