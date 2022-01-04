import { LOCALE_ID, NgModule } from '@angular/core';
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
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';
import { AppRoutingModule } from './app-routing.module';
import { DestinationComponent } from './destination/destination.component';
import { CrewComponent } from './crew/crew.component';
import { TechnologyComponent } from './technology/technology.component';

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
    HeaderComponent,
    DestinationComponent,
    CrewComponent,
    TechnologyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default);
  }
}
