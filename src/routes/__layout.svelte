<script lang="ts">
	import '../app.css';
	import { getRandomColourPallet } from '../lib/colour-pallet';

	const colourPallet = getRandomColourPallet();

	if (typeof document !== 'undefined') {
		const rootElm = document.querySelector(':root') as HTMLElement;
		rootElm.style.setProperty('--colour-light', colourPallet.light);
		rootElm.style.setProperty('--colour-dark', colourPallet.dark);
	}
</script>

<main>
	<slot />
</main>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem 10vw;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
		justify-content: center;
		align-items: center;
	}
</style>
