import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-variable',
  templateUrl: './variable.component.html',
  styleUrls: ['./variable.component.css']
})
export class VariableComponent implements OnInit {
  @Input()newVariable: {firstName:string,lastName:string,location:string,Job:string,date:string};
  showContent = true;
  changeUserName = false;
  variablefirstName = " Your firstname";
  variablelastName = "Hello Mr Your LastName is";
  variablelocation = "Hello location is";
  variableJob = "Hello your Job is";
  variabledate = "Hello this is";

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
