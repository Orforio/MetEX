import { Component, Input, OnInit } from '@angular/core';

import { Line, Maybe } from '../../../generated/graphql';

type LineBadgeLine = Maybe<(
		{ __typename?: 'Line' }
		& Pick<Line, 'name'>
	)>;

@Component({
  selector: 'metex-line-badge',
  templateUrl: './line-badge.component.html',
  styleUrls: ['./line-badge.component.scss']
})
export class LineBadgeComponent implements OnInit {
	@Input() public line: LineBadgeLine = null;
	public lineNumber = '';
	public lineSuffix = '';

  constructor() { }

  ngOnInit(): void {
		const lineNumberArray = this.line?.name?.match(/^(\d+)/);
		const lineSuffixArray = this.line?.name?.match(/\d+([a-z]+)$/);
		this.lineNumber = lineNumberArray?.length ? lineNumberArray[1] : '';
		this.lineSuffix = lineSuffixArray?.length ? lineSuffixArray[1] : '';
  }
}
