import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { EntryComponent } from './entry/entry.component';

@NgModule({
	declarations: [
		BlogComponent,
		EntryComponent
	],
	imports: [
		CommonModule,
		BlogRoutingModule,
		MarkdownModule.forChild()
	]
})
export class BlogModule {}
