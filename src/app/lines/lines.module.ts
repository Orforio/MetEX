import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MarkdownModule } from 'ngx-markdown';

import { SharedModule } from '../shared/shared.module';
import { LinesRoutingModule } from './lines-routing.module';
import { LinesComponent } from './lines.component';
import { LineComponent } from './line/line.component';
import { StationComponent } from './station/station.component';

@NgModule({
	declarations: [
		LinesComponent,
		LineComponent,
		StationComponent
	],
	imports: [
		CommonModule,
		FontAwesomeModule,
		LinesRoutingModule,
		MarkdownModule.forChild(),
		RouterModule,
		SharedModule
	]
})
export class LinesModule { }
