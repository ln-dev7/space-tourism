import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CrewComponent } from "./crew/crew.component";
import { DestinationComponent } from "./destination/destination.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { TechnologyComponent } from "./technology/technology.component";

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'destination',
    component: DestinationComponent
  },
  {
    path: 'crew',
    component: CrewComponent
  },
  {
    path: 'technology',
    component: TechnologyComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule{}
