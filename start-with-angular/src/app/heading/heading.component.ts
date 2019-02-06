import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css']
})
export class HeadingComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>();
  onSelect(feature: string){
    this.featureSelected.emit(feature);

  }

  constructor() { }

  ngOnInit() {
  }

}
