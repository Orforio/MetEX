import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JourneysRoutingModule } from './journeys-routing.module';
import { JourneysComponent } from './journeys.component';


@NgModule({
  declarations: [
    JourneysComponent
  ],
  imports: [
    CommonModule,
    JourneysRoutingModule
  ]
})
export class JourneysModule { }
