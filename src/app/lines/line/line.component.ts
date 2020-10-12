import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { TransferStateService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { LineQuery, LineGQL } from '../../../generated/graphql';
import { SITE_TITLE } from '../../../settings';

@Component({
	templateUrl: './line.component.html',
	styleUrls: ['./line.component.scss']
})
export class LineComponent implements OnInit {
	public faPlusCircle = faPlusCircle;
	public line$!: Observable<LineQuery['line']>;

	constructor(
		private lineGQL: LineGQL,
		private route: ActivatedRoute,
		private router: Router,
		private title: Title,
		private transferState: TransferStateService
	) { }

	ngOnInit(): void {
		this.line$ = this.transferState.useScullyTransferState(
			'line',
			this.lineGQL
				.fetch({ slug: this.route.snapshot.paramMap.get('slug') ?? '' })
				.pipe(
					map(data => data.data.line),
					tap(line => {
						if (line) {
							this.title.setTitle(`${SITE_TITLE} Line ${line?.name}`);
						} else {
							this.router.navigateByUrl('/404');
						}
					})
				)
			);
	}
}
