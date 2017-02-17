import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FirstSectionComponent } from './components/first-section/first-section.component';
import { SecondSectionComponent } from './components/second-section/second-section.component';
import { ThirdSectionComponent } from './components/third-section/third-section.component';

import { Ng2PageScrollModule } from 'ng2-page-scroll';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FirstSectionComponent,
    SecondSectionComponent,
    ThirdSectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2PageScrollModule.forRoot(),
    NgbModule.forRoot(), // Add Bootstrap module here.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
