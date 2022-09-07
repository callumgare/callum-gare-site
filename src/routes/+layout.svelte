<script lang="ts">
	import '../app.postcss';
	let rootElm
	// Chrome seems to show underline on links during the font blocking stage even though it should be invisble
	// so we workaround that by manually hiding the underlines till after font has loaded
	if (typeof document !== 'undefined') {
		document.fonts.load("3em Forum").then(
			() => rootElm?.classList.remove('fontsLoading')
		)
	}
</script>

<svelte:head>
	<style>
		main.fontsLoading a {
			text-decoration-color: transparent;
		}
	</style>
	<title>Callum Gare</title>
</svelte:head>

<main
	class="fontsLoading"
	bind:this={rootElm}
>
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
		align-items: safe center;
	}
</style>
