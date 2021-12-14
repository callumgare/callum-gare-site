import colourPallets from 'nice-color-palettes';
import Color from 'color';

function getRandomElement<T>(array: T[]): T {
	return array[Math.floor(array.length * Math.random())];
}

type ColourPallet = {
	light: string;
	dark: string;
	all: string[];
};

export function getRandomColourPallet(): ColourPallet {
	const colourPallet = getRandomElement(colourPallets);
	const colour1 = getRandomElement(colourPallet);
	const colour2 = getRandomElement(colourPallet);
	const enoughContrast = Color(colour1).contrast(Color(colour2)) > 4.5;
	const colour1IsBrightest = Color(colour1).luminosity() > Color(colour2).luminosity();

	if (enoughContrast) {
		return {
			light: colour1IsBrightest ? colour1 : colour2,
			dark: colour1IsBrightest ? colour2 : colour1,
			all: colourPallet
		};
	} else {
		return getRandomColourPallet();
	}
}
