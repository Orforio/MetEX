import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TransferStateService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { LinesGQL, LinesQuery } from '../../generated/graphql';
import { SITE_TITLE } from '../../settings';

@Component({
	templateUrl: './lines.component.html',
	styleUrls: ['./lines.component.scss']
})
export class LinesComponent implements OnInit {
	public lines!: Observable<LinesQuery['lines']>;

	constructor(
		private linesGQL: LinesGQL,
		private title: Title,
		private transferState: TransferStateService
	) { }

	ngOnInit(): void {
		this.title.setTitle(`${SITE_TITLE} Lines`);

		this.lines = this.transferState.useScullyTransferState(
			'lines',
			this.linesGQL
				.fetch()
				.pipe(map(data => data.data.lines))
		);
	}
}
