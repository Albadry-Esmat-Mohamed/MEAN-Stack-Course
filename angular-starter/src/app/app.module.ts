import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FootorComponent } from './shared/footor/footor.component';

import { HomeComponent } from './componenents/home/home.component';
import { AboutComponent } from './componenents/about/about.component';
import { ContactComponent } from './componenents/contact/contact.component';
import { SamplepostComponent } from './componenents/samplepost/samplepost.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FootorComponent,

    HomeComponent,
    AboutComponent,
    ContactComponent,
    SamplepostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
