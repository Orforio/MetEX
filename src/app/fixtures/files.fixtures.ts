import * as Factory from 'factory.ts';

import { UploadFile } from '../../generated/graphql';

export const imageFactory = Factory.Sync.makeFactory<UploadFile>({
	__typename: 'UploadFile',
	id: Factory.each(i => `${i}`),
	alternativeText: Factory.each(i => `Sample alt text ${i}`),
	caption: '',
	hash: '',
	height: 600,
	mime: '',
	name: Factory.each(i => `Sample name ${i}`),
	provider: 'aws',
	size: 123,
	url: 'http://example.com/example.jpg',
	width: 800,
	created_at: Date.now().toString(),
	updated_at: Date.now().toString()
});

export const soundFactory = Factory.Sync.makeFactory<UploadFile>({
	__typename: 'UploadFile',
	id: Factory.each(i => `${i}`),
	alternativeText: '',
	caption: '',
	hash: '',
	mime: '',
	name: Factory.each(i => `Sample name ${i}`),
	provider: 'aws',
	size: 123,
	url: 'http://example.com/example.mp3',
	created_at: Date.now().toString(),
	updated_at: Date.now().toString()
});
