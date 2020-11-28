import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TransferStateService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BlogsGQL, BlogsQuery } from '../../generated/graphql';
import { SITE_TITLE } from '../../settings';

@Component({
	templateUrl: './blog.component.html',
	styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
	public entries$!: Observable<BlogsQuery['blogs']>;

	constructor(
		private blogsGQL: BlogsGQL,
		private title: Title,
		private transferState: TransferStateService
	) { }

	ngOnInit(): void {
		this.title.setTitle(`${SITE_TITLE} Development blog`);

		this.entries$ = this.transferState.useScullyTransferState(
			'blogs',
			this.blogsGQL
				.fetch()
				.pipe(map(data => data.data.blogs))
		);
	}
}
