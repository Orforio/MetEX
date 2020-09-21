import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlaceComponent } from './place/place.component';
import { PlacesComponent } from './places.component';

const routes: Routes = [
	{ path: ':slug', component: PlaceComponent },
	{ path: '', component: PlacesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlacesRoutingModule { }
