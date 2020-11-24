import { ScullyConfig, setPluginConfig } from '@scullyio/scully';
import { getHttp404Plugin } from '@gammastream/scully-plugin-http404';
import { getSitemapPlugin } from '@gammastream/scully-plugin-sitemap';

require('dotenv').config();

const Http404Plugin = getHttp404Plugin();
const SitemapPlugin = getSitemapPlugin();

setPluginConfig(SitemapPlugin, {
	urlPrefix: 'https://www.metex.app',
	sitemapFilename: 'sitemap.xml',
	changeFreq: 'monthly',
	priority: [
		'1.0',
		'0.9',
		'0.8',
		'0.7',
		'0.6',
		'0.5',
		'0.4',
		'0.3',
		'0.2',
		'0.1',
		'0.0',
	],
	ignoredRoutes: ['/404'],
	routes: {
    '/blog/:slug': {
			changeFreq: 'weekly',
			priority: '0.9',
			sitemapFilename: 'sitemap-blog.xml',
		},
		'/lines/:slug': {
			changeFreq: 'monthly',
			priority: '0.9',
			sitemapFilename: 'sitemap-lines.xml',
		},
		'/lines/:linesSlug/:stationSlug': {
			changeFreq: 'monthly',
			priority: '0.8',
			sitemapFilename: 'sitemap-lines-stations.xml',
		},
		'/places/:slug': {
			changeFreq: 'monthly',
			priority: '0.9',
			sitemapFilename: 'sitemap-places.xml',
		}
	}
});

export const config: ScullyConfig = {
	projectRoot: './src',
	projectName: 'metex',
	outDir: './dist/static',
	defaultPostRenderers: [Http404Plugin],
	routes: {
		'/blog/:slug': {
			type: 'contentFolder',
			slug: {
				folder: './blog'
			}
		},
		'/lines/:slug': {
			type: 'json',
			slug: {
				url: `${process.env.API_URL}/lines?_where[active]=true`,
				property: 'slug'
			}
		},
		'/lines/:lineSlug/:stationSlug': {
			type: 'json',
			lineSlug: {
				url: `${process.env.API_URL}/lines?_where[active]=true`,
				property: 'slug'
			},
			stationSlug: {
				url: `${process.env.API_URL}/stations?line.slug=` + '${lineSlug}',
				property: 'slug'
			},
		},
		'/places/:slug': {
			type: 'json',
			slug: {
				url: `${process.env.API_URL}/places`,
				property: 'slug'
			}
		}
	}
};
