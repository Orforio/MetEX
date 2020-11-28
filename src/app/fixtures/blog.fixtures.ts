import * as Factory from 'factory.ts';

import { Blog } from '../../generated/graphql';

export const blogFactory = Factory.Sync.makeFactory<Blog>({
	__typename: 'Blog',
	id: Factory.each(i => `${i}`),
	title: Factory.each(i => `Sample entry ${i}`),
	description: Factory.each(i => `Sample description ${i}`),
	date: Factory.each(i => new Date().setDate(i).toString()),
	entry: Factory.each(i => `Sample blog entry ${i}`),
	slug: Factory.each(i => `entry-${i}`),
	created_at: Date.now().toString(),
	updated_at: Date.now().toString(),
	published_at: Date.now().toString()
});
