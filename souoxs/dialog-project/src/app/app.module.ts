import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';

import {HttpClientModule} from '@angular/common/http';
import { StopComponent } from './stop/stop.component';
import { CrossComponent } from './cross/cross.component';

@NgModule({
  declarations: [
    AppComponent,
    StopComponent,
    CrossComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
