import * as Factory from 'factory.ts';

import { Station } from '../../generated/graphql';
import { lineFactory } from './lines.fixtures';

export const stationFactory = Factory.Sync.makeFactory<Station>({
	__typename: 'Station',
	id: Factory.each(i => `${i}`),
	name: Factory.each(i => `Sample station ${i}`),
	description: Factory.each(i => `Sample description ${i}`),
	active: true,
	slug: Factory.each(i => `station-${i}`),
	line: lineFactory.build(),
	created_at: Date.now().toString(),
	updated_at: Date.now().toString()
});
