import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  serverElements = {"firstName":"","lastName":"","location":"","Job":"","date":""};
  showContent = true;
  changeUserName = false;
  userfirstNameContent = "Your firstName is";
  usersecondNameContent = "Your Second name is";
  userthirdNameContent = "Your location is";
  userfourthNameContent = "Your Job is";
  userfifthNameContent = "Today date is ";
  
  // childFirstNameContent = "Your FirstName is";
  // childSecondNameContent = "Your lastName is";
  // childthirdNameContent = "Your tlocation is";
  // childfourthNameContent = "Your Job is";
  // childFifthNameContent = "Your date is";


  // firstName = 'Ashish';
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
