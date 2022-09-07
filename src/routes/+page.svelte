<script lang="ts">
	import { getRandomColourPallet } from '$lib/colour-pallet';

	if (typeof document !== 'undefined') {
		document.addEventListener('click', changeColourScheme);
	}

	function changeColourScheme() {
		const colourPallet = getRandomColourPallet();
		try {
			(document.querySelector(':root') as HTMLElement).style.setProperty(
				'--colour-light',
				colourPallet.light
			);
			(document.querySelector(':root') as HTMLElement).style.setProperty(
				'--colour-dark',
				colourPallet.dark
			);
			(
				document.querySelector('meta[media="(prefers-color-scheme: light)"]') as HTMLMetaElement
			).content = colourPallet.light;
			(
				document.querySelector('meta[media="(prefers-color-scheme: dark)"]') as HTMLMetaElement
			).content = colourPallet.light;
		} catch (error) {}
	}
</script>

<svelte:head>
	<title>Callum Gare</title>
</svelte:head>

<div>
	<span class="openingLine">Hi, I’m Callum.</span>
	A full stack web dev living on the lands of the Wurundjeri people of the Kulin nation in Melbourne,
	Aus. You can reach me at <a href="mailto:callum@gare.au">callum@gare.au</a>.
</div>

<style>
	div {
		min-height: 33vh;
		text-align: center;
		font-size: 1.5em;
		max-width: 29em;
	}
	div .openingLine {
		font-size: 3em;
		margin-bottom: 0.15em;
		display: block;
	}
</style>
