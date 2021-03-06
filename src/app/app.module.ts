import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Routing } from './app.routing';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FirstSectionComponent } from './components/first-section/first-section.component';
import { SecondSectionComponent } from './components/second-section/second-section.component';
import { ThirdSectionComponent } from './components/third-section/third-section.component';
import { DetailComponent } from './components/third-section/detail/detail.component';
import { FormComponent } from './components/form/form.component';


import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { MapComponent } from './components/map/map.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FirstSectionComponent,
    SecondSectionComponent,
    ThirdSectionComponent,
    MapComponent,
    DetailComponent,
    HomeComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    Ng2PageScrollModule.forRoot(),
    NgbModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCFXLvCTe0u1YPAxwbtT3UpDTpA2-RYDT4'
    }),
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
