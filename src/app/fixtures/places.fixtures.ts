import * as Factory from 'factory.ts';

import { Place } from '../../generated/graphql';

export const placeFactory = Factory.Sync.makeFactory<Place>({
	__typename: 'Place',
	id: Factory.each(i => `${i}`),
	name: Factory.each(i => `Sample place ${i}`),
	description: Factory.each(i => `Sample description ${i}`),
	slug: Factory.each(i => `place-${i}`),
	created_at: Date.now().toString(),
	updated_at: Date.now().toString()
});
