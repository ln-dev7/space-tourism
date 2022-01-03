import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CrewCommanderComponent } from './crew-commander/crew-commander.component';
import { CrewEngineerComponent } from './crew-engineer/crew-engineer.component';
import { CrewPilotComponent } from './crew-pilot/crew-pilot.component';
import { CrewSpecialistComponent } from './crew-specialist/crew-specialist.component';
import { DestinationEuropaComponent } from './destination-europa/destination-europa.component';
import { DestinationMarsComponent } from './destination-mars/destination-mars.component';
import { DestinationMoonComponent } from './destination-moon/destination-moon.component';
import { DestinationTitanComponent } from './destination-titan/destination-titan.component';
import { TechnologyCapsuleComponent } from './technology-capsule/technology-capsule.component';
import { TechnologySpaceportComponent } from './technology-spaceport/technology-spaceport.component';
import { TechnologyVehiculeComponent } from './technology-vehicule/technology-vehicule.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    CrewCommanderComponent,
    CrewEngineerComponent,
    CrewPilotComponent,
    CrewSpecialistComponent,
    DestinationEuropaComponent,
    DestinationMarsComponent,
    DestinationMoonComponent,
    DestinationTitanComponent,
    TechnologyCapsuleComponent,
    TechnologySpaceportComponent,
    TechnologyVehiculeComponent,
    HomePageComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
