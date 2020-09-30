import * as Factory from 'factory.ts';

import { Movement } from '../../generated/graphql';
import { stationFactory } from './stations.fixtures';

export const movementFactory = Factory.Sync.makeFactory<Movement>({
	__typename: 'Movement',
	id: Factory.each(i => `${i}`),
	up_allowed: true,
	up_station: stationFactory.build(),
	down_allowed: true,
	down_station: stationFactory.build(),
	created_at: Date.now().toString(),
	updated_at: Date.now().toString()
});

export const coherentMovementsFactory = (upStations = 1, downStations = 1, allowed = true, terminus = false) => {
	let upStationArray = [];
	let downStationArray = [];

	for(let i = 0; i < upStations; i++) {
		upStationArray.push({
			allowed,
			station: (terminus ? null : stationFactory.build())
		});
	}

	for(let i = 0; i < downStations; i++) {
		downStationArray.push({
			allowed,
			station: (terminus ? null : stationFactory.build())
		});
	}

	return [
		...upStationArray,
		...downStationArray
	];
};
