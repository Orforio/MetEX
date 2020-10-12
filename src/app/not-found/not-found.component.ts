import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { SITE_TITLE } from '../../settings';

@Component({
	templateUrl: './not-found.component.html',
	styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {
	constructor(private title: Title) { }

	ngOnInit(): void {
		this.title.setTitle(`${SITE_TITLE} 404 Not found`);
	}
}
