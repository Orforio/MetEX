import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbCarouselModule, NgbButtonsModule } from '@ng-bootstrap/ng-bootstrap';

import { JourneysRoutingModule } from './journeys-routing.module';
import { JourneysComponent } from './journeys.component';
import { JourneyPlayerComponent } from './journey-player/journey-player.component';
import { JourneyPlayerService } from './journey-player/journey-player.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    JourneysComponent,
    JourneyPlayerComponent,
		JourneyPlayerService
  ],
  imports: [
    CommonModule,
		FontAwesomeModule,
		FormsModule,
    JourneysRoutingModule,
		NgbCarouselModule,
		NgbButtonsModule,
		SharedModule
  ]
})
export class JourneysModule { }
