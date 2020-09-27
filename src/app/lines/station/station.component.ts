import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TransferStateService } from '@scullyio/ng-lib';
import { map, tap } from 'rxjs/operators';

import {
	MovementsGQL,
	MovementsQuery,
	StationGQL,
	StationQuery
} from '../../../generated/graphql';

@Component({
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.scss']
})
export class StationComponent implements OnInit {
	public downMovements: MovementsQuery['downMovements'];
	public station: StationQuery['station'];
	public upMovements: MovementsQuery['upMovements'];

  constructor(
		private movementsGQL: MovementsGQL,
		private route: ActivatedRoute,
		private router: Router,
		private stationGQL: StationGQL,
		private transferState: TransferStateService
	) { }

  ngOnInit(): void {
		this.route.paramMap.subscribe(params => {
			this.getStation(params.get('lineSlug') ?? '', params.get('stationSlug') ?? '');
		});
  }

	public getStation(lineSlug: string, stationSlug: string): void {
		this.transferState.useScullyTransferState(
			'station',
			this.stationGQL
				.fetch({
					lineSlug: lineSlug ?? '',
					stationSlug: stationSlug ?? ''
				})
				.pipe(
					map(data => data.data.station),
					tap(station => !station && this.router.navigateByUrl('/404'))
				)
			)
			.subscribe(station => {
				this.station = station;

				this.transferState.useScullyTransferState(
					'movements',
					this.movementsGQL
						.fetch({
							stationId: this.station?.id!
						})
					)
					.subscribe(data => {
						this.upMovements = data.data.upMovements;
						this.downMovements = data.data.downMovements;
					});
			});
	}
}
