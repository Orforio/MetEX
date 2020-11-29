import * as Factory from 'factory.ts';

import { Line } from '../../generated/graphql';

export const lineFactory = Factory.Sync.makeFactory<Line>({
	__typename: 'Line',
	id: Factory.each(i => `${i}`),
	name: Factory.each(i => `${i}`),
	description: Factory.each(i => `Sample description ${i}`),
	slug: Factory.each(i => `line-${i}`),
	order: Factory.each(i => i),
	created_at: Date.now().toString(),
	updated_at: Date.now().toString()
});
