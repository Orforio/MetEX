import { Component, OnInit } from '@angular/core';

import { JourneyPlayerService } from './journey-player.service';

@Component({
	selector: 'metex-journey-player',
	templateUrl: './journey-player.component.html',
	styleUrls: ['./journey-player.component.scss']
})
export class JourneyPlayerComponent implements OnInit {
	public audio = 'https://metex-assets.s3.eu-west-1.amazonaws.com/Bercy_Ambience_78b28054b5.mp3';
	public audioLength = 30;
	public journey = [
		{
			time: 0,
			caption: "Caption A",
			image: 'https://metex-assets.s3.eu-west-1.amazonaws.com/Gare_de_Lyon_1_916e62c0f1.jpg',
			station: "Station A"
		},
		{
			time: 5,
			caption: "Caption B",
			image: 'https://metex-assets.s3.eu-west-1.amazonaws.com/Gare_de_Lyon_2_c82f480ea4.jpg',
			station: "Station A"
		},
		{
			time: 10,
			caption: "Caption C",
			image: 'https://metex-assets.s3.eu-west-1.amazonaws.com/Gare_de_Lyon_1_916e62c0f1.jpg',
			station: "Next: Station B"
		},
		{
			time: 15,
			caption: "Caption D",
			image: 'https://metex-assets.s3.eu-west-1.amazonaws.com/Gare_de_Lyon_3_d43f09d5f6.jpg',
			station: "Station B"
		},
		{
			time: 20,
			caption: "Caption E",
			image: 'https://metex-assets.s3.eu-west-1.amazonaws.com/Gare_de_Lyon_3_d43f09d5f6.jpg',
			station: "Station B"
		}
	];
	public journeySegments = this.journey.map((segment, index, segments) => {
		if (index + 1 < segments.length) {
			return segments[index + 1].time - segment.time;
		} else {
			return this.audioLength - segment.time;
		}
	})
	public status = {
		playing: false,
		step: 0,
		time: 17
	};

	constructor(private service: JourneyPlayerService) { }

	ngOnInit(): void {
	}

	public handleSegmentChange(segment: number) {
		console.log('Changing to segment', segment);
	}
}
