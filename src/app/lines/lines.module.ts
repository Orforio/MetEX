import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SharedModule } from '../shared/shared.module';
import { LinesRoutingModule } from './lines-routing.module';
import { LinesComponent } from './lines.component';
import { LineComponent } from './line/line.component';

@NgModule({
	declarations: [
		LinesComponent,
		LineComponent
	],
	imports: [
		CommonModule,
		FontAwesomeModule,
		LinesRoutingModule,
		RouterModule,
		SharedModule
	]
})
export class LinesModule { }
