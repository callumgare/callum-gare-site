import { expect, test } from 'vitest';
import { getRandomColourPallet } from '../../src/lib/colour-pallet.js';

test('getRandomColourPallet should return a random colour pallet', () => {
	const colourPallet = getRandomColourPallet();

	const isHexColour = expect.stringMatching(/^#[a-f0-9]{6}$/);

	expect(colourPallet).toEqual({
		light: isHexColour,
		dark: isHexColour,
		all: expect.arrayContaining([isHexColour])
	});
});
