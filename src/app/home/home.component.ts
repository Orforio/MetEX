import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { SITE_TITLE } from '../../settings';

@Component({
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	constructor(private title: Title) { }

	ngOnInit(): void {
		this.title.setTitle(`${SITE_TITLE} The Paris Métro Experience`);
	}
}
