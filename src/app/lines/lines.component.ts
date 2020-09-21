import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { LinesGQL, LinesQuery } from '../../generated/graphql';

@Component({
	templateUrl: './lines.component.html',
	styleUrls: ['./lines.component.scss']
})
export class LinesComponent implements OnInit {
	public lines!: Observable<LinesQuery['lines']>;

	constructor(private linesGQL: LinesGQL) { }

	ngOnInit(): void {
		this.lines = this.linesGQL
			.fetch()
			.pipe(map(data => data.data.lines));
	}
}
