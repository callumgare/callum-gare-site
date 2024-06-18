<script lang="ts">
	import { getRandomColourPallet } from '$lib/colour-pallet';

	let contentElm: HTMLElement;

	if (typeof document !== 'undefined') {
		document.addEventListener('click', (event) => {
			if (!(event.target instanceof Element) || contentElm?.contains(event.target)) {
				return;
			}
			changeColourScheme();
		});
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
			).content = colourPallet.dark;
		} catch (error) {
			console.error('Failed to change colour scheme', error);
		}
	}
</script>

<svelte:head>
	<title>Callum Gare</title>
</svelte:head>

<div class="container">
	<div class="content" bind:this={contentElm}>
		<span class="openingLine">Hi, I’m Callum.</span>
		A full stack web dev living on the lands of the Wurundjeri people of the Kulin nation in Melbourne,
		Aus. You can reach me at <a href="mailto:callum@gare.au">callum@gare.au</a>.
	</div>
</div>

<style>
	:global(body) {
		user-select: none;
	}
	.container {
		min-height: 33vh;
		text-align: center;
		font-size: 1.5em;
		max-width: 29em;

		& .content {
			user-select: text;

			& .openingLine {
				font-size: 3em;
				margin-bottom: 0.15em;
				display: block;
			}
		}
	}
</style>
