<script lang="ts">
	import Moon from '$lib/assets/Moon.svelte';
	import Sun from '$lib/assets/Sun.svelte';

	let { children } = $props();

	let isDarkMode = $state(false);

	function darkModeToggle() {
		isDarkMode = !isDarkMode;
		window.document.body.classList.toggle('dark-mode');
	}
</script>

{@render children()}

<button class="dark-mode-toggle {isDarkMode ? 'dark-mode' : ''}" onclick={darkModeToggle}>
	{#if isDarkMode}
		<Moon />
	{:else}
		<Sun />
	{/if}
</button>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Libertinus+Math&family=Roboto+Slab:wght@100..900&display=swap');

	:global(html),
	:global(body) {
		font-family: 'Josefin Sans', sans-serif;
	}

	:global(body) {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
		width: 100vw;
		padding: 20px;
		background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
		background-size: 400% 400%;
		animation: gradient 10s ease infinite;
	}

	:global(body.dark-mode) {
		background: linear-gradient(-45deg, #461607, #48051f, #052d3c, #032b22);
		background-size: 400% 400%;
		animation: gradient 10s ease infinite;
	}

	:global(*) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	:global(body) :global(*) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		color: #fff;
	}

	.dark-mode-toggle {
		position: fixed;
		right: 40px;
		bottom: 40px;
		background-color: #fff;
		border: none;
		border-radius: 50%;
		width: 50px;
		height: 50px;
		cursor: pointer;
		transition: all 400ms;
	}

	.dark-mode-toggle:hover {
		background-color: #dbdbdb;
	}

	.dark-mode-toggle.dark-mode {
		background-color: #000;
		color: red;
	}

	.dark-mode-toggle.dark-mode:hover {
		background-color: #3a3a3a;
	}

	.dark-mode-toggle :global(svg) {
		width: 32px;
		height: 32px;
		color: red;
	}

	@keyframes gradient {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
</style>
