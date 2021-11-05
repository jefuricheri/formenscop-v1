import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './partial/header/header.component';
import { PlanningComponent } from './planning/planning.component';
import { StagiaireComponent } from './stagiaire/stagiaire.component';
import { HomeComponent } from './home/home.component';
import { OffreComponent } from './offre/offre.component';
import { HebdoplanningComponent } from './partial/hebdoplanning/hebdoplanning.component';
import { ModuleComponent } from './module/module.component';

FullCalendarModule.registerPlugins([
  timeGridPlugin,
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    PlanningComponent,
    StagiaireComponent,
    HomeComponent,
    OffreComponent,
    HebdoplanningComponent,
    ModuleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FullCalendarModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
