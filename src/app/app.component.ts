import { Component } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { MILESTONE } from '../settings';

@Component({
	selector: 'metex-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	public faGithub = faGithub;
	public menuCollapsed = true;
	public milestone = MILESTONE;

	constructor() { }
}
