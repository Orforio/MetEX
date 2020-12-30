import { DefaultUrlSerializer, UrlTree } from '@angular/router';

/**
 * @see https://github.com/angular/angular/issues/16051
 */
export class TrailingSlashUrlSerializer extends DefaultUrlSerializer {
	private static _withTrailingSlash(url: string): string {
		const splitOn = url.indexOf('?') > - 1 ? '?' : '#';
		const pathArr = url.split(splitOn);

		if (!pathArr[0].endsWith('/')) {
			let fileName: string = url.substring( url.lastIndexOf('/') + 1);
			if (fileName.indexOf('.') === -1) {
				pathArr[0] += '/';
			}
		}
		const result = pathArr.join(splitOn);

		return result;
	}

	serialize(tree: UrlTree): string {
		return TrailingSlashUrlSerializer._withTrailingSlash(super.serialize(tree));
	}
}
