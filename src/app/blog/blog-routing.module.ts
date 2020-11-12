import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogComponent } from './blog.component';
import { EntryComponent } from './entry/entry.component';

const routes: Routes = [
	{ path: ':slug', component: EntryComponent },
	{ path: '', component: BlogComponent }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class BlogRoutingModule {}
