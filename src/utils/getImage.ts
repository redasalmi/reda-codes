import type { LocalImage } from '~/types';

export function getLocalImage(
	imageList: LocalImage[],
	fileName: string,
	fileExtension: string,
) {
	const image = imageList.find(
		({ default: image }) =>
			image.src.includes(fileName) && image.src.includes(fileExtension),
	);

	if (!image) {
		throw new Error(`${fileName}.${fileExtension} not found`);
	}

	return image.default;
}
