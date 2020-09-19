import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { PlacesRoutingModule } from './places-routing.module';
import { PlacesComponent } from '../places/places.component';

@NgModule({
	declarations: [PlacesComponent],
	imports: [
		CommonModule,
		FontAwesomeModule,
		PlacesRoutingModule
	]
})
export class PlacesModule { }
