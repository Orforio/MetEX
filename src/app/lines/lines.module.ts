import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { LinesRoutingModule } from './lines-routing.module';
import { LinesComponent } from './lines.component';

@NgModule({
	declarations: [LinesComponent],
	imports: [
		CommonModule,
		LinesRoutingModule,
		SharedModule
	]
})
export class LinesModule { }
