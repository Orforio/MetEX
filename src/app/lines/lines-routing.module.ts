import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LinesComponent } from './lines.component';

const routes: Routes = [
	{ path: '', component: LinesComponent }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class LinesRoutingModule { }
