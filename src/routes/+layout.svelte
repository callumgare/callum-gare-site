<script lang="ts">
	import '../app.postcss';
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
