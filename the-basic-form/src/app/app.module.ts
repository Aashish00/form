
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
// import { HttpModule } from '@angular/http';
import {NgxPrintModule} from 'ngx-print';
import {ENgxPrintModule} from "e-ngx-print";

import { AppComponent } from './app.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { VariableComponent } from './variable/variable.component';


@NgModule({
  declarations: [
    AppComponent,
    CockpitComponent,
    ServerElementComponent,
    VariableComponent
  ],
  imports: [
    BrowserModule,
    
    FormsModule,
    NgxPrintModule,
     ENgxPrintModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
