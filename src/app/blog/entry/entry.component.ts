import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { SITE_TITLE } from '../../../settings';

@Component({
	templateUrl: './entry.component.html',
	styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {
	entry$!: Observable<ScullyRoute>;

	constructor(
		private scully: ScullyRoutesService,
		private title: Title
	) { }

	ngOnInit(): void {
		this.title.setTitle(`${SITE_TITLE} Development blog`);

		this.entry$ = this.scully.getCurrent().pipe(
			tap(entry => this.title.setTitle(`${SITE_TITLE} ${entry?.title}`))
		);
	}
}
