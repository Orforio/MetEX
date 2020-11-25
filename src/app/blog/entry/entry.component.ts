import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { TransferStateService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { BlogQuery, BlogGQL } from '../../../generated/graphql';
import { SITE_TITLE } from '../../../settings';

@Component({
	templateUrl: './entry.component.html',
	styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {
	public entry$!: Observable<BlogQuery['blog']>;

	constructor(
		private blogGQL: BlogGQL,
		private route: ActivatedRoute,
		private router: Router,
		private title: Title,
		private transferState: TransferStateService
	) { }

	ngOnInit(): void {
		this.entry$ = this.transferState.useScullyTransferState(
			'blog',
			this.blogGQL
				.fetch({ slug: this.route.snapshot.paramMap.get('slug') ?? '' })
				.pipe(
					map(data => data.data.blog),
					tap(entry => {
						if (entry) {
							this.title.setTitle(`${SITE_TITLE} ${entry?.title}`);
						} else {
							this.router.navigateByUrl('/404');
						}
					})
				)
		);
	}
}
