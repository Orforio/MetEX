import { ScullyConfig } from '@scullyio/scully';
import { getHttp404Plugin } from '@gammastream/scully-plugin-http404';

const Http404Plugin = getHttp404Plugin();

export const config: ScullyConfig = {
	projectRoot: './src',
	projectName: 'metex',
	outDir: './dist/static',
	defaultPostRenderers: [Http404Plugin],
	routes: {
		'/lines/:slug': {
			type: 'json',
			slug: {
				url: 'https://metex-cms.herokuapp.com/lines?_where[active]=true',
				property: 'slug'
			}
		},
		'/lines/:lineSlug/:stationSlug': {
			type: 'json',
			lineSlug: {
				url: 'https://metex-cms.herokuapp.com/lines?_where[active]=true',
				property: 'slug'
			},
			stationSlug: {
				url: 'https://metex-cms.herokuapp.com/stations?line.slug=${lineSlug}',
				property: 'slug'
			},
		},
		'/places/:slug': {
			type: 'json',
			slug: {
				url: 'https://metex-cms.herokuapp.com/places',
				property: 'slug'
			}
		}
	}
};
