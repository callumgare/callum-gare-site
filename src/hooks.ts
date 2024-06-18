import type { Handle } from '@sveltejs/kit';
import { getRandomColourPallet } from './lib/colour-pallet';

export const handle: Handle = async function ({ event, resolve }) {
	return await resolve(event, {
		transformPageChunk: ({ html }) => insertColourPalletVars(html)
	});
};

function insertColourPalletVars(html: string): string {
	const colourPallet = getRandomColourPallet();

	return html.replace(
		'</head>',
		`<meta name="theme-color" media="(prefers-color-scheme: light)" content="${colourPallet.light}">
			<meta name="theme-color" media="(prefers-color-scheme: dark)" content="${colourPallet.dark}">
			<style>
				:root {
					--colour-light: ${colourPallet.light};
					--colour-dark: ${colourPallet.dark};
				}
			</style>
			</head>`
	);
}
