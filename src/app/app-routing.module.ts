import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
	{ path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) },
	{ path: 'lines', loadChildren: () => import('./lines/lines.module').then(m => m.LinesModule) },
	{ path: 'places', loadChildren: () => import('./places/places.module').then(m => m.PlacesModule) },
	{ path: 'tour/:lineSlug/:stationSlug', redirectTo: 'lines/:lineSlug/:stationSlug' },
	{ path: '404', component: NotFoundComponent },
	{ path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
	{ path: '**', redirectTo: '404' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
	exports: [RouterModule]
})
export class AppRoutingModule { }
