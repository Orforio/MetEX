import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AmbientSoundComponent } from './ambient-sound/ambient-sound.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ConnectionsComponent } from './connections/connections.component';
import { LineBadgeComponent } from './line-badge/line-badge.component';
import { MovementLinkComponent } from './movement-link/movement-link.component';
import { NearbyPlacesComponent } from './nearby-places/nearby-places.component';

@NgModule({
	declarations: [
		AmbientSoundComponent,
		CarouselComponent,
		ConnectionsComponent,
		LineBadgeComponent,
		MovementLinkComponent,
		NearbyPlacesComponent
	],
	imports: [
		CommonModule,
		FontAwesomeModule,
		NgbModule,
		RouterModule
	],
	exports: [
		AmbientSoundComponent,
		CarouselComponent,
		ConnectionsComponent,
		LineBadgeComponent,
		MovementLinkComponent,
		NearbyPlacesComponent
	]
})
export class SharedModule { }
