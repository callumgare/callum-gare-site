/** @type {import('@sveltejs/kit').Handle} */
import { getRandomColourPallet } from './lib/colour-pallet';
export async function handle({ event, resolve }) {
	return await resolve(event, {
		transformPageChunk: ({ html }) => insertColourPalletVars(html)
	});
}

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
