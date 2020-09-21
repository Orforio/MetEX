import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CarouselComponent } from './carousel/carousel.component';
import { ConnectionsComponent } from './connections/connections.component';
import { LineBadgeComponent } from './line-badge/line-badge.component';

@NgModule({
	declarations: [
		CarouselComponent,
		ConnectionsComponent,
		LineBadgeComponent
	],
	imports: [
		CommonModule,
		NgbModule,
		RouterModule
	],
	exports: [
		CarouselComponent,
		ConnectionsComponent,
		LineBadgeComponent
	]
})
export class SharedModule { }
