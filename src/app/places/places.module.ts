import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MarkdownModule } from 'ngx-markdown';

import { SharedModule } from '../shared/shared.module';
import { PlacesRoutingModule } from './places-routing.module';
import { PlacesComponent } from '../places/places.component';
import { PlaceComponent } from './place/place.component';

@NgModule({
	declarations: [
		PlacesComponent,
		PlaceComponent
	],
	imports: [
		CommonModule,
		FontAwesomeModule,
		MarkdownModule.forChild(),
		PlacesRoutingModule,
		SharedModule
	]
})
export class PlacesModule { }
