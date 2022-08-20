import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@dragon-ball-app/material';
import { RoutingModule } from './app-routing.module';
import { SaiyansComponent } from './saiyans/saiyans.component';
import { SaiyansListComponent } from './saiyans/saiyans-list/saiyans-list.component';
import { SaiyanDetailsComponent } from './saiyans/saiyan-details/saiyan-details.component';
import { HttpClientModule } from '@angular/common/http';
import { EnvironmentModule } from '@dragon-ball-app/environment';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SaiyansComponent,
    SaiyansListComponent,
    SaiyanDetailsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RoutingModule,
    HttpClientModule,
    EnvironmentModule.withEnvironment(environment),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
