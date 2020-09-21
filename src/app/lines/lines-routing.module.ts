import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LinesComponent } from './lines.component';
import { LineComponent } from './line/line.component';

const routes: Routes = [
	{ path: ':slug', component: LineComponent },
	{ path: '', component: LinesComponent }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class LinesRoutingModule { }
