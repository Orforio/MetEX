import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class JourneyPlayerService {
	public audioEvents = [
		"canplay",
		"ended",
		"error",
		"loadedmetadata",
		"loadstart",
		"pause",
		"play",
		"playing",
		"timeupdate"
	];
	private audio = new Audio();
	private stop$ = new Subject();

	constructor() { }

	public pause() {
		this.audio.pause();
	}

	public play() {
		this.audio.play();
	}

	public playStream(url: string) {
		return this.streamObservable(url).pipe(takeUntil(this.stop$));
	}

	public seekTo(seconds: number) {
		this.audio.currentTime = seconds;
	}

	public stop() {
		this.stop$.next();
	}

	private streamObservable(url: string) {
		return new Observable(observer => {
			this.audio.src = url;
			this.audio.load();
			this.audio.play();

			const handler = (event: Event) => {
				observer.next(event);
			};

			this.addEvents(this.audio, this.audioEvents, handler);

			return () => {
				this.audio.pause();
				this.audio.currentTime = 0;
				this.removeEvents(this.audio, this.audioEvents, handler);
			};
		});
	}

	private addEvents(
		audio: HTMLAudioElement,
		events: string[],
		handler: (event: Event) => void
	): void {
		events.forEach(event => audio.addEventListener(event, handler));
	}

	private removeEvents(
		audio: HTMLAudioElement,
		events: string[],
		handler: (event: Event) => void
	): void {
		events.forEach(event => audio.removeEventListener(event, handler));
	}
}
