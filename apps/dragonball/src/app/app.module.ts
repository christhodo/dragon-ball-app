import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@dragon-ball-app/material';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { EnvironmentModule } from '@dragon-ball-app/environment';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClient,
    EnvironmentModule.withEnvironment(environment),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
