import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JourneysComponent } from './journeys.component';

const routes: Routes = [
	{ path: '', component: JourneysComponent }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class JourneysRoutingModule { }
