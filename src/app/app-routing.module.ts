import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
	{ path: 'lines', loadChildren: () => import('./lines/lines.module').then(m => m.LinesModule) },
	{ path: 'places', loadChildren: () => import('./places/places.module').then(m => m.PlacesModule) },
	{ path: 'tour/:lineSlug/:stationSlug', redirectTo: 'lines/:lineSlug/:stationSlug' },
	{ path: '404', component: NotFoundComponent },
	{ path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
	{ path: '**', redirectTo: '404' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
