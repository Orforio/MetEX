import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { SITE_TITLE } from '../../settings';

@Component({
	templateUrl: './blog.component.html',
	styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
	public entries$!: Observable<ScullyRoute[]>;

	constructor(
		private scully: ScullyRoutesService,
		private title: Title
	) { }

	ngOnInit(): void {
		this.title.setTitle(`${SITE_TITLE} Development blog`);

		this.entries$ = this.scully.available$
			.pipe(map(entries => entries
				.filter(entry => entry.route.startsWith('/blog/'))
				.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
			));
	}
}
