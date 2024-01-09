import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'metex-segmented-progress-bar',
  templateUrl: './segmented-progress-bar.component.html',
  styleUrls: ['./segmented-progress-bar.component.scss']
})
export class SegmentedProgressBarComponent implements OnInit {
	@Input() public currentProgress = 0;
	@Input() public segments: number[]  = [];
	@Output() public onSegmentChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void { }

	public calculateValue(index: number): number {
		const runningTotal = this.segments.slice(0, index + 1).reduce((total, segment) => segment + total, 0);

		if (runningTotal - this.segments[index] > this.currentProgress) {
			return 0;
		} else if (this.currentProgress > runningTotal) {
			return 100;
		} else {
			const segmentStartTime = runningTotal - this.segments[index];
			const secondsIntoSegment = this.currentProgress - segmentStartTime;

			return (secondsIntoSegment / this.segments[index]) * 100;
		}
	}

	public calculateWidth(segmentLength: number): number {
		const totalLength = this.segments.reduce((total, segment) => segment + total, 0);

		return (segmentLength / totalLength) * 100;
	}

	public handleSegmentClick(segmentIndex: number): void {
		this.onSegmentChange.emit(segmentIndex);
	}
}
