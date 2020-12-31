import { ScullyConfig, setPluginConfig } from '@scullyio/scully';
import { getHttp404Plugin } from '@gammastream/scully-plugin-http404';
import { getFlashPreventionPlugin } from '@scullyio/scully-plugin-flash-prevention';
import { getSitemapPlugin } from '@gammastream/scully-plugin-sitemap';

require('dotenv').config();

const Http404Plugin = getHttp404Plugin();
const FlashPreventionPlugin = getFlashPreventionPlugin({
	appRootSelector: 'metex-root'
});
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
	defaultPostRenderers: [
		Http404Plugin,
		FlashPreventionPlugin,
		'seoHrefOptimise'
	],
	routes: {
		'/blog/:slug': {
			type: 'json',
			slug: {
				url: `${process.env.API_URL}/blogs`,
				property: 'slug'
			}
		},
		'/lines/:slug': {
			type: 'json',
			slug: {
				url: `${process.env.API_URL}/lines`,
				property: 'slug'
			}
		},
		'/lines/:lineSlug/:stationSlug': {
			type: 'json',
			lineSlug: {
				url: `${process.env.API_URL}/lines`,
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
