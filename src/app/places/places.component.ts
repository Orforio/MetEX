import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { TransferStateService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { PlacesGQL, PlacesQuery } from '../../generated/graphql';
import { SITE_TITLE } from '../../settings';

@Component({
	templateUrl: './places.component.html',
	styleUrls: ['./places.component.scss']
})
export class PlacesComponent implements OnInit {
	public faPlusCircle = faPlusCircle;
	public places$!: Observable<PlacesQuery['places']>;

	constructor(
		private placesGQL: PlacesGQL,
		private title: Title,
		private transferState: TransferStateService
	) { }

	ngOnInit(): void {
		this.title.setTitle(`${SITE_TITLE} Places of interest`);

		this.places$ = this.transferState.useScullyTransferState(
			'places',
			this.placesGQL
				.fetch()
				.pipe(map(data => data.data.places))
		);
	}
}
